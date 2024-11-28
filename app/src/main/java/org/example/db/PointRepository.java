package org.example.db;

import org.example.db.model.Point;

import java.util.List;

public interface PointRepository {

    void save(Point point);
    Point findById(int id);
    List<Point> findPoint(int offset, int limit);

}