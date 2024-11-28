package org.example.util;

import org.example.db.model.Point;

public class PointValidator {

    public void isValidPoint(Point p) throws Exception {
        RestrictionsHelper.isGreaterOrLesser(3, -3, p.getX());
        RestrictionsHelper.isGreaterOrLesser(2, -2, p.getY());
        RestrictionsHelper.isGreaterOrLesser(3, 1, p.getR());
    }
}