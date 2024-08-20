// full_server/utils.js
import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const rows = data.split('\n').filter(row => row.trim() !== '');
    const [header, ...content] = rows;

    const [fieldIndex, firstnameIndex] = header.split(',').reduce((indexes, column, idx) => {
      if (column === 'field') indexes[0] = idx;
      if (column === 'firstname') indexes[1] = idx;
      return indexes;
    }, [-1, -1]);

    if (fieldIndex === -1 || firstnameIndex === -1) {
      throw new Error('Invalid database format');
    }

    const studentsByField = {};
    content.forEach(row => {
      const [field, firstname] = row.split(',').filter(Boolean);
      if (field && firstname) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
