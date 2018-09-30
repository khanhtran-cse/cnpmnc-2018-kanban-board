import React, { Component } from 'react';
import { sendRequest } from '../services/Http.services'
// import { AuthenticateService } from '../services/AuthenticateService'

import swal from 'sweetalert2'

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			pwConfirm: '',
			formErrors: {
				email: '', password: '', pwConfirm: ''
			},
			sending: false,
			resForm: {
				msg: '',
				hasError: false
			}
		}
	}
	onChangeEmail = (e) => {
		this.setState({ email: e.target.value })
		this.validateField('email', e.target.value)
	}
	onChangePassword = (e) => {
		this.setState({ password: e.target.value })
		this.validateField('password', e.target.value)
	}
	onChangePwConfirm = (e) => {
		this.setState({ pwConfirm: e.target.value })
		this.validateField('pwConfirm', e.target.value)
	}
	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.email;
		let passwordValid = this.state.password;
		let pwConfirmValid = this.state.pwConfirm;
		// console.log(this.state.formErrors)
		switch(fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : 'Địa chi email không hợp lệ';
				break;
			case 'password':
				passwordValid = value.length >= 6;
				fieldValidationErrors.password = passwordValid ? '': 'Mật khẩu ít nhất 6 ký tự';
				break;
			case 'pwConfirm':
				pwConfirmValid = (passwordValid === value);
				fieldValidationErrors.pwConfirm = pwConfirmValid ? '': 'Không khớp, vui lòng nhập lại';
				break;
			default:
				break;
		}
		// console.log(this.state.formErrors)
	}
	onSubmit = (e) => {
		console.log('Submit');
		e.preventDefault();
		const { email, password, pwConfirm, formErrors } = this.state;
		console.log("pwConfirm", pwConfirm);
		if (formErrors.email === '' && formErrors.password === '' && formErrors.pwConfirm === '') {
			this.setState({sending: true});
			let data = { username: email, password: password }
			sendRequest('post', '/users/signup', data).then((res) => {
				// console.log(res);
				if(!res.isError) {
					// TODO:
					if(res && res.data.code === 0){
						swal('Success!', 'Đăng ký thành công.', 'success');
					} else if(res.data.code === 3){
						swal('Error!', 'Tên đăng nhập đã tồn tại.', 'error');
					} else{
						swal('Error!', 'Lỗi hệ thống', 'error');
					}
				} else {
					swal('Error!', 'Lỗi hệ thống', 'error');
					
				}
				this.setState({sending: false});
			});
		}
	}
	renderErrorRegister() {
		if (this.state.resForm.hasError) {
			return (
				<div className="alert alert-danger">
					<button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					<strong>Error!</strong> {this.state.resForm.msg}
				</div>); 
		} else {
			return;
		}
	}
	render() {
		const { email, password, pwConfirm, formErrors, sending } = this.state
		let errEmail, errPw, errPwConfirm;
		if (formErrors.email) {
			errEmail = <label id="email-error" className="error">{formErrors.email}</label>;
		}
		if (formErrors.password) {
			errPw = <label id="password-error" className="error">{formErrors.password}</label>;
		}
		if (formErrors.pwConfirm) {
		errPwConfirm = <label id="pwConfirm-error" className="error">{formErrors.pwConfirm}</label>;
		}
		return (
			<div id="page-register">
				<div className="container">
					<div className="card card-container">
						<img id="profile-img" alt="" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
						<p id="profile-name" className="profile-name-card"></p>
						{this.renderErrorRegister()}
						<form onSubmit={this.onSubmit} id="form-signup" className="form-signin">
							<span id="reauth-email" className="reauth-email"></span>
							
							<div className="form-group">
								<label>Email</label>
								<input type="email" onChange={this.onChangeEmail} value={email} className="form-control" placeholder="Email address" />
								{errEmail}
							</div>
							<div className="form-group">
								<label>Mật khẩu</label>
								<input type="password" onChange={this.onChangePassword} value={password} className="form-control" placeholder="Password" />
								{errPw}
							</div>
							<div className="form-group">
								<label>Nhập lại mật khẩu</label>
								<input type="password" onChange={this.onChangePwConfirm} value={pwConfirm} className="form-control" placeholder="Password Confirm" />
								{errPwConfirm}
							</div>
							<button className={sending ? 'btn btn-lg btn-primary btn-block btn-signup sending' : 'btn btn-lg btn-primary btn-block btn-signup'} type="submit">
								<div className="loader"></div>
								Đăng ký</button>
						</form>
						{/* <a href="#" className="forgot-password">Quên mật khẩu?</a>  */}
						<a href="/login" className="register">Đăng nhập</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Register;