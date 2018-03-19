
//const controller = require('../controllers/controller');
//TL NEW CODE TO
const curriculum_controller = require('../controllers/curriculum_controller');
const faculty_controller = require('../controllers/faculty_controller');
const student_controller = require('../controllers/student_controller');
const faculty_has_student_controller = require('../controllers/faculty_has_student_controller');

//DB TEAM updates (5 insertion function + 1 deletion)-------------------------------------- 
const prereq_controller = require('../controllers/prereq_controller');
const schedule_controller = require('../controllers/schedule_controller');//REYES-----------------
const section_controller = require('../controllers/section_controller');//REYES------------------
const regcomm_controller = require('../controllers/regcomm_controller');
const course_offering_controller = require('../controllers/course_offering_controller'); // added Mar 17, 2018
//DB TEAM updates (5 insertion function + 1 deletion)-------------------------------------- 

module.exports = (app) => {

	//Valencia-------------------------------
	app.get('/regcomm_add', regcomm_controller.regcomm_add);
	//Valencia--------------------------------
	//Quejada-------------------------------------------
	//PREREQ 
	app.get('/prereq_add', prereq_controller.prereq_add);
	app.get('/prereq_delete', prereq_controller.prereq_delete);
	//Quejada-------------------------------------------

	//DBT REYES----------------------------------
	app.get('/section_add',section_controller.section_add); 
	app.get('/schedule_add', schedule_controller.schedule_add);
	//DBT Reyes-----------------------------------
	//ERA--
	//COURSE OFFERING FUNCTIONS - ADD AND EDIT
	app.get('/course_offering_add', course_offering_controller.course_offering_add);
	//ERA----


	//SECTION functions
	app.get('/section_edit_starttime', section_controller.section_edit_starttime);
	app.get('/section_edit_endtime', section_controller.section_edit_endtime);
	app.get('/section_edit_room', section_controller.section_edit_room);
	app.get('/section_edit_day', section_controller.section_edit_day);
	app.get('/section_edit_status', section_controller.section_edit_status);
	app.get('/section_edit_idealsize', section_controller.section_edit_idealsize);
	app.get('/section_edit_actualsize', section_controller.section_edit_actualsize);


	//CURRICULUM functions
	app.get('/curriculum_add', curriculum_controller.curriculum_add);
	app.get('/curriculum_edit', curriculum_controller.curriculum_edit);
	app.get('/curriculum_delete', curriculum_controller.curriculum_delete);
	app.get('/curriculum_searchByName', curriculum_controller.curriculum_searchByName);
	app.get('/curriculum_searchById', curriculum_controller.curriculum_searchById);
	app.get('/curriculum_viewAll', curriculum_controller.curriculum_viewAll);
	app.get('/curriculum_viewById', curriculum_controller.curriculum_viewById);
	app.get('/curriculum_viewByName', curriculum_controller.curriculum_viewByName);

	//FACULTY functions
	app.get('/faculty_add',faculty_controller.faculty_add);
	app.get('/faculty_setAdviser', faculty_controller.faculty_setAdviser); 
	app.get('/faculty_unsetAdviser', faculty_controller.faculty_unsetAdviser);
	app.get('/faculty_editStatus', faculty_controller.faculty_editStatus); 
	app.get('/faculty_editFname', faculty_controller.faculty_editFname); 
	app.get('/faculty_editMname', faculty_controller.faculty_editMname);  
	app.get('/faculty_editLname', faculty_controller.faculty_editLname); 
	app.get('/faculty_editUsername', faculty_controller.faculty_editUsername);
	app.get('/faculty_editPassword', faculty_controller.faculty_editPassword);
	app.get('/faculty_deleteByEnum', faculty_controller.faculty_deleteByEnum);
	app.get('/faculty_deleteByLname', faculty_controller.faculty_deleteByLname);
	app.get('/faculty_searchById', faculty_controller.faculty_searchById);
	app.get('/faculty_searchByFname', faculty_controller.faculty_searchByFname);
	app.get('/faculty_searchByLname', faculty_controller.faculty_searchByLname);
	app.get('/faculty_searchByStatus', faculty_controller.faculty_searchByStatus);
	app.get('/faculty_searchByUsername', faculty_controller.faculty_searchByUsername);
	app.get('/faculty_viewAll', faculty_controller.faculty_viewAll);
	app.get('/faculty_viewByEnum', faculty_controller.faculty_viewByEnum);
	app.get('/faculty_viewByLname', faculty_controller.faculty_viewByLname);
	app.get('/faculty_viewAdvisers', faculty_controller.faculty_viewAdvisers);
	app.get('/faculty_viewNonAdvisers', faculty_controller.faculty_viewNonAdvisers);
	
	//STUDENT functions
	app.get('/student_add',student_controller.student_add);
	app.get('/student_editFname', student_controller.student_editFname);
	app.get('/student_editMname', student_controller.student_editMname);
	app.get('/student_editLname', student_controller.student_editLname);
	app.get('/student_editStatus', student_controller.student_editStatus);
	app.get('/student_editCurriculumId', student_controller.student_editCurriculumId);
	app.get('/student_deleteByStudNum', student_controller.student_deleteByStudNum);
	app.get('/student_deleteByLname', student_controller.student_deleteByLname);
	app.get('/student_searchByStudNum', student_controller.student_searchByStudNum);
	app.get('/student_searchByFName', student_controller.student_searchByFName);
	app.get('/student_searchByLName', student_controller.student_searchByLName);
	app.get('/student_searchByStatus', student_controller.student_searchByStatus);
	app.get('/student_searchByCurriculumId', student_controller.student_searchByCurriculumId);
	app.get('/student_viewByStudnum', student_controller.student_viewByStudnum);
	app.get('/student_viewByLname', student_controller.student_viewByLname);

	//ADVISER-ADVISEE functions
	app.get('/faculty_has_student_add', faculty_has_student_controller.faculty_has_student_add);
	app.get('/faculty_has_student_editStatus', faculty_has_student_controller.faculty_has_student_editStatus);
	app.get('/faculty_has_student_editDate', faculty_has_student_controller.faculty_has_student_editDate);
	app.get('/faculty_has_student_editEnum', faculty_has_student_controller.faculty_has_student_editEnum);
}
