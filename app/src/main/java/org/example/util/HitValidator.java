package org.example.util;

public class HitValidator {

    public Boolean isHit(double x, double y, double r) {

        double[][] polygon1 = {
                {0.35 * r, 0.75 * r},
                {-0.6 * r, -0.3 * r},
                {-0.25 * r, -0.3 * r},
                {0.6 * r, 0.75 * r}
        };

        double[][] polygon2 = {
                {-0.2 * r, 0.75 * r},
                {-0.6 * r, 0.35 * r},
                {-0.35 * r, 0.35 * r},
                {0.05 * r, 0.75 * r}
        };

        double[][] polygon3 = {
                {0.35 * r, 0.1 * r},
                {0, -0.3 * r},
                {0.25, -0.3 * r},
                {0.6 * r, 0.1 * r}
        };

        boolean insideRectangle1 = isInsideRectangle(x, y, -0.6 * r, r, 1.2 * r, 0.25 * r);
        boolean insideRectangle2 = isInsideRectangle(x, y, -0.6 * r, 0.35 * r, 1.2 * r, 0.25 * r);
        boolean insideRectangle3 = isInsideRectangle(x, y, -0.6 * r, -0.3 * r, 1.2 * r, 0.25 * r);
        boolean insidePolygon1 = isInsidePolygon(x, y, polygon1);
        boolean insidePolygon2 = isInsidePolygon(x, y, polygon2);
        boolean insidePolygon3 = isInsidePolygon(x, y, polygon3);

        return insideRectangle1 || insideRectangle2 || insideRectangle3 ||
                insidePolygon1 || insidePolygon2 || insidePolygon3;
    }

    private boolean isInsideRectangle(double px, double py, double rectX, double rectY, double width, double height) {
        return (px >= rectX && px <= rectX + width) && (py <= rectY && py >= rectY - height);
    }

    private boolean isInsidePolygon(double px, double py, double[][] polygon) {
        int n = polygon.length;
        boolean inside = false;

        for (int i = 0, j = n - 1; i < n; j = i++) {
            double xi = polygon[i][0], yi = polygon[i][1];
            double xj = polygon[j][0], yj = polygon[j][1];

            boolean intersect = ((yi > py) != (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
            if (intersect) {
                inside = !inside;
            }
        }

        return inside;
    }
}