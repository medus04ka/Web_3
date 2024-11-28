package org.example.beans;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import org.example.ServerContext;
import org.example.db.PointRepositoryPostgresSQL;
import org.example.db.model.Point;
import org.example.util.HitValidator;
import org.example.util.PointValidator;

import java.sql.SQLException;

@Named("formBean")
@ApplicationScoped
public class FormBean {
    private double x;
    private double y;
    private double r;

    public void check() {
        try (var connection = ServerContext.getConnection()) {
            Point point = new Point(x, y, r);
            point.setIsHit(checkPoint(point));

            PointRepositoryPostgresSQL repository = new PointRepositoryPostgresSQL(connection);
            repository.save(point);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private boolean checkPoint(Point point) throws Exception {
        PointValidator pointValidator = new PointValidator();
        pointValidator.isValidPoint(point);
        HitValidator hitValidator = new HitValidator();
        return hitValidator.isHit(point.getX(), point.getY(), point.getR());
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }
}