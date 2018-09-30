import { LocalStorageService } from '../services/LocalStorageService';

const initTask = [
  {
    "id":1,
    "project":"Axon active",
    "name": "Update item detail",
    "description": "How to use backlog",
    "status": 0,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Khanh",
    "phase":"Backend"
  },
  {
    "id": 2,
    "project": "Axon active",
    "name": "New board item",
    "description": "How to use backlog",
    "status": 0,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Luc",
    "phase": "Backend"
  },
  {
    "id": 3,
    "project": "Axon active",
    "name": "Delete backlog item",
    "description": "How to use backlog",
    "status": 1,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Nam",
    "phase": "Backend"
  },
  {
    "id": 4,
    "project": "Axon active",
    "name": "Create backlog item",
    "description": "How to use backlog",
    "status": 1,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Huynh",
    "phase": "Backend"
  },
  {
    "id": 5,
    "project": "Axon active",
    "name": "Change alert UI",
    "description": "How to use backlog",
    "status": 2,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Hung",
    "phase": "Backend"
  },
  {
    "id": 1,
    "project": "Axon active",
    "name": "Fake front data",
    "description": "How to use backlog",
    "status": 2,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Long",
    "phase": "Backend"
  },
  {
    "id": 6,
    "project": "Axon active",
    "name": "Backlog 5",
    "description": "How to use backlog",
    "status": 3,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Tam",
    "phase": "Makerting"
  },
  {
    "id": 7,
    "project": "Axon active",
    "name": "Backlog 5",
    "description": "How to use backlog",
    "status": 3,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Khanh",
    "phase": "Frontend"
  },
  {
    "id": 8,
    "project": "Kanban ",
    "name": "Init backend",
    "description": "How to use backlog",
    "status": 3,
    "start_date": "29/09/2018",
    "end_date": "30/09/2018",
    "assignTo": "Khanh",
    "phase": "Backend"
  }
]

const tasks = (state = initTask, action) => {
  switch (action.type) {
		case 'UPDATE_TASK':
			console.log("Reducer task", action, state);
			LocalStorageService.set('tasks', [
				...state,
				action.task
			]);
      return [
				...state,
				action.task
			]
    default:
      return state
  }
}

export default tasks