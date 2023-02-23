const publicRoutes = {
  'POST /register': 'UserController.register',
  'POST /login': 'UserController.login',
  'PUT /makeTrainer': 'UserController.makeTrainer',

  'POST /addEvent': 'EventController.createEvent',
  'PUT /approveEvent/:eventId': 'EventController.approveEvent',
  'PUT /rejectEvent/:eventId': 'EventController.rejectEvent',
  'POST /attendEvent': 'EventController.attendEvent',
  'GET /getTrainerEvents/:trainerId': 'EventController.getTrainerEvents',
  
  'GET /getPendingEvents': 'EventController.getPendingEvents',

  'GET /members': 'UserController.getMembers',
  'GET /trainers': 'UserController.getTrainers',

  'GET /events': 'EventController.listEvents',
  
  'POST /addWorkout': 'WorkoutController.addProgress',
  'GET /getUserProgress/:Id': 'WorkoutController.getUserProgress',

  //announcements
  'POST /announcements': 'AnnouncementController.createAnnouncement',
  'GET /announcements': 'AnnouncementController.listAnnouncements',

  //complains
  'POST /complain': 'ComplainController.createComplain',
  'GET /complain': 'ComplainController.listComplain',
  
  //Exercises
  'POST /exercise': 'ExerciseController.addExercise',
  'GET /exercise': 'ExerciseController.listExercises',
  'GET /exercise-schedule': 'ExerciseController.getExeSchedule',
  'POST /exercise-schedule': 'ExerciseController.getExeSchedule',
  'GET /exercise/:exerciseId': 'ExerciseController.getExercise',
  'GET /exercise/:categoryId': 'ExerciseController.getExercisesCategory',
  
  //Trainee
  'POST /trainee': 'TraineeController.addTrainee',
  'GET /trainee/:traineeId': 'TraineeController.getTrainee',
  'GET /trainee': 'TraineeController.listTrainees',
  'GET /traineesByTrainerId/:trainerId': 'TraineeController.getTraineesByTrainerId',
  
  //User Gym schedule
  'GET /userSchedule/:traineeId': 'UserScheduleController.getUserSchedule',
  'POST /userSchedule': 'UserScheduleController.addUserSchedule',
  'POST /getDayWorkOuts': 'UserScheduleController.getDayWorkOuts',
  'POST /bulkaddSchedule': 'UserScheduleController.bulkAddUserSchedule',
  
  //User Events
  'GET /userEvents/:UserId': 'UserEventsController.getMyEvents',
  'POST /userEvents': 'UserEventsController.attendEvent',

  //Attend
  'POST /attendGym': 'AttendenceGymController.attend',
  'GET /getCapacity': 'AttendenceGymController.getCapacity',
  
  //User Progress
  'GET /userProgress/:TraineeId': 'UserProgressController.getProgress',
  'POST /userProgress': 'UserProgressController.addProgress',
  'GET /userDayProgress/:TraineeId/:day': 'UserProgressController.getDayProgress',
  
  //Trainee
  'PUT /trainee/:id': 'TraineeController.updateTrainee',
};

module.exports = publicRoutes;
