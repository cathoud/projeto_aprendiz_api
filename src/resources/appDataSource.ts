import { Course } from "src/course/entities/course.entity";
// import { CourseInstructor } from "src/course/entities/courseInstructor.entity";
import { CourseMember } from "src/course/entities/courseMember.entity";
// import { CourseStudent } from "src/course/entities/courseStudent.entity";
import { Instructor } from "src/member/entities/instructor.entity";
import { Member } from "src/member/entities/member.entity";
import { Student } from "src/member/entities/student.entity";
import { Subject } from "src/subject/entities/subject.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const mysqlDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'example',
  database: 'db_aprendiz',
  entities: [Member, Subject, Course, CourseMember, Instructor, Student],
  synchronize: true,
}

// export const mysqlDataSouce = new DataSource(mysqlDataSourceOptions)