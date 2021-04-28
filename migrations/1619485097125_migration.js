/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createSchema("app", { ifNotExists: true });

  pgm.createTable(
    "app.user",
    {
      id: { type: "uuid", primaryKey: true },
      name: { type: "varchar(100)", notNull: true },
      birthday: { type: "date", notNull: true },
    },
    {
      ifNotExists: true,
    }
  );

  pgm.createTable(
    "app.appointments",
    {
      id: { type: "id" },
      date: { type: "date", notNull: true },
      iniTime: { type: "datetime", notNull: true },
      endTime: { type: "datetime", notNull: true },
      userId: { type: "uuid", notNull: true },
    },
    {
      ifNotExists: true,
    }
  );

  pgm.addConstraint("app.appointments", "fk_user_id", {
    foreignKeys: {
      columns: "userId",
      references: "user('id')",
    },
  });
};

exports.down = (pgm) => {
  pgm.dropSchema("app");
};
