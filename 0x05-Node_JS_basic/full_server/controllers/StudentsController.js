// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';
      Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach(field => {
        const namesList = studentsByField[field].join(', ');
        responseText += `Number of students in ${field}: ${studentsByField[field].length}. List: ${namesList}\n`;
      });
      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(process.argv[2]);
      const namesList = studentsByField[major] ? studentsByField[major].join(', ') : '';
      res.status(200).send(`List: ${namesList}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
