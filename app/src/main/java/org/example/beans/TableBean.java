package org.example.beans;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


import jakarta.enterprise.context.ApplicationScoped;
import org.example.ServerContext;
import org.example.db.PointRepositoryPostgresSQL;
import org.example.db.model.Point;


import jakarta.inject.Named;

@Named("tableBean")
@ApplicationScoped
public class TableBean {
    private List<Point> points = new ArrayList<>();

    public TableBean() {
        points = getPoints();
    }

    public List<Point> getPoints() {
        try (var connection = ServerContext.getConnection()) {
            PointRepositoryPostgresSQL repository = new PointRepositoryPostgresSQL(connection);
            points = repository.findPoint(0, 52);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return points;
    }
}