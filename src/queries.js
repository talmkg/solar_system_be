import { pool } from "./pg.js";

export const getPlanets = (request, response) => {
  pool.query("SELECT * FROM planets ORDER BY id ASC", (error, results) => {
    if (error) {
      response.status(404).send("No planets were found.");
    } else {
      response.status(200).json(results.rows);
    }
  });
};

// export const getUserById = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// export const createUser = (request, response) => {
//   const { name, email } = request.body;

//   pool.query(
//     "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id",
//     [name, email],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       console.log(response);
//       response.status(201).send(`User added with ID: ${results.rows[0].id}`);
//     }
//   );
// };

// export const updateUser = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     "UPDATE users SET name = $1, email = $2 WHERE id = $3",
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

// export const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`User deleted with ID: ${id}`);
//   });
// };
