package org.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ServerContext {
    private static final String URL = "jdbc:postgresql://pg:5432/julik_ne_vorui";
    private static final String USER = "gooooooooool";
    private static final String PASSWORD = "goida";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

}