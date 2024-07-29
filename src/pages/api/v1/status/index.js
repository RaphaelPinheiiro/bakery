import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const databaseVersion = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersion.rows[0].server_version;

  const databaseMaxConnections = await database.query("SHOW max_connections;");
  const databaseMaxConnectionsValue =
    databaseMaxConnections.rows[0].max_connections;

  const databaseOpenedConnections = await database.query(
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'bakery_db';",
  );
  const databaseOpenedConnectionsValue =
    databaseOpenedConnections.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;
