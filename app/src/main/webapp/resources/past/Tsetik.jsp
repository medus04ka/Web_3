<%@ page import="org.example.AreaCheckPast" %>
<%@ page import="java.util.List" %>
<%@ page import="org.example.response.JsonResponse" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChZahaa</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<table id="main-grid">
    <tr>
        <td id="header-plate" colspan="2">
            <a href="https://ooo.eeeee.ooo/"> <span class="left-aligned">пиписи</span></a>
            <span class="right-aligned">7979</span>
        </td>
    </tr>

    <tr>
        <td class="content-plate" id="graph-plate">
            <div class="plate-top">
                <h2 class="plate-top-title">ZZZ</h2>
            </div>
            <div class="container">
                <div class="left-block" id="graph">
                    <section class="block plot-section">
                        <div class="graph">
                            <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
                                <!-- Оси со стрелками -->
                                <line stroke="gray" x1="0" x2="300" y1="150" y2="150"></line>
                                <line stroke="gray" x1="150" x2="150" y1="0" y2="300"></line>
                                <polygon fill="black" points="150,0 144,15 156,15" stroke="white"></polygon>
                                <polygon fill="black" points="300,150 285,156 285,144" stroke="white"></polygon>

                                <!-- Засечки -->
                                <line stroke="gray" x1="200" x2="200" y1="155" y2="145"></line>
                                <line stroke="gray" x1="250" x2="250" y1="155" y2="145"></line>

                                <line stroke="gray" x1="50" x2="50" y1="155" y2="145"></line>
                                <line stroke="gray" x1="100" x2="100" y1="155" y2="145"></line>

                                <line stroke="gray" x1="145" x2="155" y1="100" y2="100"></line>
                                <line stroke="gray" x1="145" x2="155" y1="50" y2="50"></line>

                                <line stroke="gray" x1="145" x2="155" y1="200" y2="200"></line>
                                <line stroke="gray" x1="145" x2="155" y1="250" y2="250"></line>

                                <!-- Подписи к засечкам -->
                                <text fill="black" x="195" y="140">R/2</text>
                                <text fill="black" x="248" y="140">R</text>

                                <text fill="black" x="40" y="140">-R</text>
                                <text fill="black" x="90" y="140">-R/2</text>

                                <text fill="black" x="160" y="105">R/2</text>
                                <text fill="black" x="160" y="55">R</text>

                                <text fill="black" x="160" y="205">-R/2</text>
                                <text fill="black" x="160" y="255">-R</text>

                                <text fill="black" x="160" y="10">Y</text>
                                <text fill="black" x="290" y="140">X</text>

                                <!-- Прямоугольники и полигоны -->
                                <rect x="90" y="50" width="120" height="25" fill="#0000FF" fill-opacity="0.5"
                                      stroke="#0000FF"></rect>
                                <rect x="90" y="180" width="120" height="25" fill="#0000FF" fill-opacity="0.5"
                                      stroke="#0000FF"></rect>
                                <rect x="90" y="115" width="120" height="25" fill="#0000FF" fill-opacity="0.5"
                                      stroke="#0000FF"></rect>

                                <polygon fill="#0000FF" fill-opacity="1" points="185,75 90,180 115,180 210,75"
                                         stroke="#0000FF"></polygon>
                                <polygon fill="#0000FF" fill-opacity="0.5" points="90,115 115,115 155,75 130,75"
                                         stroke="#0000FF"></polygon>
                                <polygon fill="#0000FF" fill-opacity="0.5" points="210,140 185,140 150,180 175,180"
                                         stroke="#0000FF"></polygon>

                                <line stroke="white" stroke-width="3" stroke-opacity="0.7" x1="211" x2="116" y1="75"
                                      y2="180"></line>
                                <circle cx="150" cy="150" id="target-dot" r="0" stroke="white" fill="white"></circle>
                            </svg>
                        </div>
                    </section>
                </div>
            </div>
        </td>

        <td class="content-plate" id="table-plate" rowspan="2">
            <div class="plate-top">
                <h2 class="plate-top-title">Табло</h2>
            </div>

            <div class="scroll-container">
                <table id="result-table">
                    <tr class="table-header">
                        <th class="coords-col">X</th>
                        <th class="coords-col">Y</th>
                        <th class="coords-col">R</th>
                        <th class="time-col">Текущий тайм</th>
                        <th class="time-col">Время тайм</th>
                        <th class="hitres-col">Хит результат</th>
                    </tr>

                    <tbody id="results">
                    <jsp:include page="results.jsp"/>
                    </tbody>
                </table>
            </div>
        </td>

    </tr>

    <tr>
        <td class="content-plate" id="values-plate">
            <div class="plate-top">
                <h2 class="plate-top-title">Параметрычи</h2>
            </div>

            <form id="input-form" action="" method="POST">
                <table id="input-grid">
                    <tr>
                        <td class="input-grid-label">
                            <label for="x-text-input">X:</label>
                        </td>
                        <td class="input-grid-value">
                            <input id="x-text-input" type="text" name="xval" maxlength="10" autocomplete="off"
                                   placeholder="текстиком циферки напишите от -3 до 3...">
                            <div id="notification" class="notification" style="display: none;"></div>
                        </td>
                    </tr>

                    <tr>
                        <td class="input-grid-label">
                            <label>Y:</label>
                        </td>
                        <td class="input-grid-value radio-group">
                            <div class="center-label">
                                <label class="box-label" for="y-radio1">-2</label>
                                <input class="y-radio" id="y-radio1" type="radio" name="yval" value="-2">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="y-radio2">-1,5</label>
                                <input class="y-radio" id="y-radio2" type="radio" name="yval" value="-1.5">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="y-radio3">-1</label>
                                <input class="y-radio" id="y-radio3" type="radio" name="yval" value="-1">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="y-radio4">-0,5</label>
                                <input class="y-radio" id="y-radio4" type="radio" name="yval" value="-0.5">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="y-radio5">0</label>
                                <input class="y-radio" id="y-radio5" type="radio" name="yval" value="0">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="y-radio6">0,5</label>
                                <input class="y-radio" id="y-radio6" type="radio" name="yval" value="0.5">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="y-radio7">1</label>
                                <input class="y-radio" id="y-radio7" type="radio" name="yval" value="1">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="y-radio8">1,5</label>
                                <input class="y-radio" id="y-radio8" type="radio" name="yval" value="1.5">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="y-radio9">2</label>
                                <input class="y-radio" id="y-radio9" type="radio" name="yval" value="2">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="input-grid-label">
                            <label>R:</label>
                        </td>
                        <td class="input-grid-value radio-group">
                            <div class="center-label">
                                <label class="box-label" for="r-radio1">1</label>
                                <input class="r-radio" id="r-radio1" type="radio" name="rval" value="1">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="r-radio2">1,5</label>
                                <input class="r-radio" id="r-radio2" type="radio" name="rval" value="1.5">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="r-radio3">2</label>
                                <input class="r-radio" id="r-radio3" type="radio" name="rval" value="2">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="r-radio4">2,5</label>
                                <input class="r-radio" id="r-radio4" type="radio" name="rval" value="2.5">
                            </div>

                            <div class="center-label">
                                <label class="box-label" for="r-radio5">3</label>
                                <input class="r-radio" id="r-radio5" type="radio" name="rval" value="3">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            <div class="buttons">
                                <input class="button" type="submit" value="ok">
                                <input class="button" type="reset" value="не ok">
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        </td>
    </tr>
</table>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="../js/script.js"></script>
</body>
</html>
