var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define("Entities", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Coordinate = /** @class */ (function () {
        function Coordinate(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        return Coordinate;
    }());
    exports.Coordinate = Coordinate;
    var Coordinate3D = /** @class */ (function (_super) {
        __extends(Coordinate3D, _super);
        function Coordinate3D(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            var _this = _super.call(this, x, y) || this;
            _this.z = z;
            return _this;
        }
        return Coordinate3D;
    }(Coordinate));
    exports.Coordinate3D = Coordinate3D;
    var Rect = /** @class */ (function () {
        function Rect(w, h) {
            if (w === void 0) { w = 0; }
            if (h === void 0) { h = 0; }
            this.h = h;
            this.w = w;
        }
        return Rect;
    }());
    exports.Rect = Rect;
    var Interval = /** @class */ (function () {
        function Interval(start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = 0; }
            this.start = start;
            this.end = end;
        }
        Interval.prototype.intersect = function (second) {
            return (this.start <= second.start && second.start <= this.end) ||
                (this.start <= second.end && second.end <= this.end) ||
                (second.start <= this.start && this.start <= second.end) ||
                (second.start <= this.end && this.end <= second.end);
        };
        return Interval;
    }());
    exports.Interval = Interval;
});
define("utils/Triangle3D", ["require", "exports", "Entities", "lodash"], function (require, exports, Entities_1, _) {
    "use strict";
    exports.__esModule = true;
    var Triangle3D = /** @class */ (function () {
        function Triangle3D(x1, x2, x3) {
            this.points = [x1, x2, x3];
        }
        Triangle3D.plus = function (first, second) {
            return new Entities_1.Coordinate3D(first.x + second.x, first.y + second.y, first.z + second.z);
        };
        Triangle3D.minus = function (first, second) {
            return new Entities_1.Coordinate3D(first.x - second.x, first.y - second.y, first.z - second.z);
        };
        Triangle3D.mult = function (n, vector) {
            return new Entities_1.Coordinate3D(n * vector.x, n * vector.y, n * vector.z);
        };
        Triangle3D.normalize = function (vector) {
            return this.mult(1 / this.vecLength(vector), vector);
        };
        Triangle3D.dot = function (first, second) {
            return first.x * second.x + first.y * second.y + first.z * second.z;
        };
        Triangle3D.cross = function (first, second) {
            return new Entities_1.Coordinate3D(first.y * second.z - first.z * second.y, first.z * second.x - first.x * second.z, first.x * second.y - first.y * second.x);
        };
        Triangle3D.vecLength = function (vector) {
            return Math.sqrt(Math.pow(vector.x, 2) +
                Math.pow(vector.y, 2) +
                Math.pow(vector.z, 2));
        };
        Triangle3D.sign = function (x) {
            return x < 0 ? -1 : 1;
        };
        Triangle3D.equal = function (first, second) {
            return Math.abs(first.x - second.x) < this.EPS &&
                Math.abs(first.y - second.y) < this.EPS &&
                Math.abs(first.z - second.z) < this.EPS;
        };
        Triangle3D.parallel = function (vector1, vector2) {
            var l = this.dot(vector1, vector2) / (this.vecLength(vector1) * this.vecLength(vector2));
            return 1 - Math.abs(l) < this.EPS;
        };
        Triangle3D.getNotParallel = function (vector, plane) {
            var e_1, _a;
            try {
                for (var _b = __values([[0, 1], [1, 2], [0, 2]]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var coords = _c.value;
                    var fi = coords[0];
                    var si = coords[1];
                    if (!this.parallel(vector, this.minus(plane.points[fi], plane.points[si])))
                        return coords;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return [-1, -1];
        };
        Triangle3D.intersectLine = function (start1, direction1, start2, direction2) {
            var e_2, _a, e_3, _b;
            if (this.parallel(direction1, direction2)) {
                return [Infinity, Infinity];
            }
            var compute = function (s1x, s1y, d1x, d1y, s2x, s2y, d2x, d2y) {
                var t2 = (s2y * d1x + s1x * d1y - s1y * d1x - s2x * d1y) / (d2x * d1y - d2y * d1x);
                return [
                    t2,
                    (s2x + t2 * d2x - s1x) / d1x
                ];
            };
            // select properties to use
            var firstProp = null;
            try {
                for (var _c = __values(['x', 'y', 'z']), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var p = _d.value;
                    if (direction1[p] != 0)
                        firstProp = p;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var secondProp = null;
            try {
                for (var _e = __values(['x', 'y', 'z']), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var p = _f.value;
                    if (p !== firstProp && (direction1[p] !== 0 || direction2[p] !== 0))
                        secondProp = p;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var _g = __read(compute(start1[firstProp], start1[secondProp], direction1[firstProp], direction1[secondProp], start2[firstProp], start2[secondProp], direction2[firstProp], direction2[secondProp]), 2), t1 = _g[0], t2 = _g[1];
            return [t1, t2];
        };
        Triangle3D.intersectLineTriangle = function (start, direction, triangle) {
            var e_4, _a;
            var intersects = [];
            try {
                for (var _b = __values([[0, 1], [1, 2], [0, 2]]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var comb = _c.value;
                    var firstPoint = triangle.points[comb[0]];
                    var secondPoint = triangle.points[comb[1]];
                    var _d = __read(this.intersectLine(start, direction, firstPoint, this.minus(secondPoint, firstPoint)), 2), triangleMovement = _d[0], lineMovement = _d[1];
                    if (triangleMovement >= 0 && triangleMovement <= 1) {
                        intersects.push(lineMovement);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return new Entities_1.Interval(intersects[0], intersects[1]);
        };
        Triangle3D.canPointsIntersectPlane = function (first, second) {
            // plane = N*P+d
            var e_5, _a;
            // normal
            var N = Triangle3D.cross(Triangle3D.minus(first.points[1], first.points[0]), Triangle3D.minus(first.points[2], first.points[0]));
            var d = Triangle3D.dot(Triangle3D.minus(new Entities_1.Coordinate3D(), N), first.points[0]);
            var signum = null;
            try {
                for (var _b = __values(second.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var p = _c.value;
                    var distance = Triangle3D.dot(N, p) + d;
                    if (distance == 0)
                        return true;
                    if (signum === null)
                        signum = Triangle3D.sign(distance);
                    if (Triangle3D.sign(distance) !== signum)
                        return true;
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return false;
        };
        Triangle3D.twoRectanglesIntersect = function (first, second) {
            var e_6, _a;
            // plane = N*P+d
            var N1 = this.normalize(Triangle3D.cross(Triangle3D.minus(first.points[1], first.points[0]), Triangle3D.minus(first.points[2], first.points[0])));
            var d1 = Triangle3D.dot(Triangle3D.minus(new Entities_1.Coordinate3D(), N1), first.points[0]);
            var N2 = this.normalize(Triangle3D.cross(Triangle3D.minus(second.points[1], second.points[0]), Triangle3D.minus(second.points[2], second.points[0])));
            var d2 = Triangle3D.dot(Triangle3D.minus(new Entities_1.Coordinate3D(), N2), second.points[0]);
            if (this.parallel(N1, N2) && Math.abs(d1 - d2) > this.EPS) {
                // different parallel planes
                return false;
            }
            else if (this.parallel(N1, N2) && Math.abs(d1 - d2) < this.EPS) {
                // at the same plane
                var firstTriangleLines = [
                    { start: first.points[0], vector: Triangle3D.minus(first.points[1], first.points[0]) },
                    { start: first.points[0], vector: Triangle3D.minus(first.points[2], first.points[0]) },
                    { start: first.points[1], vector: Triangle3D.minus(first.points[2], first.points[1]) },
                ];
                var secondTriangleLiens = [
                    { start: second.points[0], vector: Triangle3D.minus(second.points[1], second.points[0]) },
                    { start: second.points[0], vector: Triangle3D.minus(second.points[2], second.points[0]) },
                    { start: second.points[1], vector: Triangle3D.minus(second.points[2], second.points[1]) },
                ];
                var _loop_1 = function (fLine) {
                    var multipliers = secondTriangleLiens.map(function (sLine) {
                        var fMultiplier = (sLine.vector.x * (fLine.start.y - sLine.start.y) - sLine.vector.y * (fLine.start.x - sLine.start.x))
                            /
                                (sLine.vector.y * fLine.vector.x - fLine.vector.y * sLine.vector.x);
                        var sMultiplier = (fLine.start.x + fLine.vector.x * fMultiplier - sLine.start.x) / (sLine.vector.x) ||
                            (fLine.start.y + fLine.vector.y * fMultiplier - sLine.start.y) / (sLine.vector.y) ||
                            (fLine.start.z + fLine.vector.z * fMultiplier - sLine.start.z) / (sLine.vector.z);
                        return { first: fMultiplier, second: sMultiplier };
                    });
                    // at least one line is crossing another
                    if (_.some(multipliers, function (m) { return m.first >= 0 && m.first <= 1; }))
                        return { value: true };
                    // is within
                    var isWithin = [[0, 1], [1, 2], [0, 2], [1, 0], [2, 1], [2, 0]].map(function (indexes) {
                        var fIndex = indexes[0];
                        var sIndex = indexes[1];
                        return multipliers[fIndex].first < 0 &&
                            multipliers[sIndex].first > 0 &&
                            multipliers[fIndex].second >= 0 && multipliers[fIndex].second <= 1 &&
                            multipliers[sIndex].second >= 0 && multipliers[sIndex].second <= 1;
                    }).reduce(function (p, c) { return p || c; });
                    if (isWithin)
                        return { value: true };
                };
                try {
                    for (var firstTriangleLines_1 = __values(firstTriangleLines), firstTriangleLines_1_1 = firstTriangleLines_1.next(); !firstTriangleLines_1_1.done; firstTriangleLines_1_1 = firstTriangleLines_1.next()) {
                        var fLine = firstTriangleLines_1_1.value;
                        var state_1 = _loop_1(fLine);
                        if (typeof state_1 === "object")
                            return state_1.value;
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (firstTriangleLines_1_1 && !firstTriangleLines_1_1.done && (_a = firstTriangleLines_1["return"])) _a.call(firstTriangleLines_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                // otherwise no overlap
                return false;
            }
            // intersection line
            var intersectDirection = this.cross(N1, N2);
            var indexes = this.getNotParallel(intersectDirection, first);
            var crossVect = this.minus(first.points[indexes[1]], first.points[indexes[0]]);
            var s = this.dot(N2, this.minus(second.points[0], first.points[indexes[0]]))
                /
                    this.dot(N2, crossVect);
            var intersectPoint = this.plus(first.points[indexes[0]], this.mult(s, crossVect));
            var fInterval = this.intersectLineTriangle(intersectPoint, intersectDirection, first);
            var sInterval = this.intersectLineTriangle(intersectPoint, intersectDirection, second);
            return fInterval.intersect(sInterval);
        };
        Triangle3D.prototype.collide = function (second) {
            return Triangle3D.canPointsIntersectPlane(this, second) &&
                Triangle3D.twoRectanglesIntersect(this, second);
        };
        Triangle3D.EPS = 0.0000000001;
        return Triangle3D;
    }());
    exports.Triangle3D = Triangle3D;
});
define("ColliderEntities", ["require", "exports", "Entities", "utils/Triangle3D", "lodash"], function (require, exports, Entities_2, Triangle3D_1, _) {
    "use strict";
    exports.__esModule = true;
    var Collider = /** @class */ (function () {
        function Collider() {
        }
        Collider.prototype.collide = function (second, direct) {
            if (direct === void 0) { direct = false; }
            if (second[this.collideCallback()]) {
                return second[this.collideCallback()](this);
            }
            if (!direct) {
                return second.collide(this, true);
            }
            return this.collideRaw(second);
        };
        Collider.prototype.collideRaw = function (second) {
            var e_7, _a, e_8, _b;
            var trianglesCurrent = this.triangles();
            var trianglesSecond = second.triangles();
            try {
                for (var trianglesCurrent_1 = __values(trianglesCurrent), trianglesCurrent_1_1 = trianglesCurrent_1.next(); !trianglesCurrent_1_1.done; trianglesCurrent_1_1 = trianglesCurrent_1.next()) {
                    var f = trianglesCurrent_1_1.value;
                    try {
                        for (var trianglesSecond_1 = (e_8 = void 0, __values(trianglesSecond)), trianglesSecond_1_1 = trianglesSecond_1.next(); !trianglesSecond_1_1.done; trianglesSecond_1_1 = trianglesSecond_1.next()) {
                            var s = trianglesSecond_1_1.value;
                            if (f.collide(s))
                                return true;
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (trianglesSecond_1_1 && !trianglesSecond_1_1.done && (_b = trianglesSecond_1["return"])) _b.call(trianglesSecond_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (trianglesCurrent_1_1 && !trianglesCurrent_1_1.done && (_a = trianglesCurrent_1["return"])) _a.call(trianglesCurrent_1);
                }
                finally { if (e_7) throw e_7.error; }
            }
            return false;
        };
        return Collider;
    }());
    exports.Collider = Collider;
    var ColliderCube = /** @class */ (function (_super) {
        __extends(ColliderCube, _super);
        function ColliderCube(pos, size) {
            var _this = _super.call(this) || this;
            _this.pos = pos;
            _this.size = size;
            return _this;
        }
        ColliderCube.prototype.collideCallback = function () {
            return "collideCube";
        };
        ColliderCube.prototype.collideCube = function (second) {
            var tx = new Entities_2.Interval(this.pos.x, this.pos.x + this.size.x);
            var ty = new Entities_2.Interval(this.pos.y, this.pos.y + this.size.y);
            var tz = new Entities_2.Interval(this.pos.z, this.pos.z + this.size.z);
            var sx = new Entities_2.Interval(second.pos.x, second.pos.x + second.size.x);
            var sy = new Entities_2.Interval(second.pos.y, second.pos.y + second.size.y);
            var sz = new Entities_2.Interval(second.pos.z, second.pos.z + second.size.z);
            return tx.intersect(sx) && ty.intersect(sy) && tz.intersect(sz);
        };
        ColliderCube.prototype.triangles = function () {
            var _a = this.pos, x = _a.x, y = _a.y, z = _a.z;
            var _b = { dx: this.size.x, dy: this.size.y, dz: this.size.z }, dx = _b.dx, dy = _b.dy, dz = _b.dz;
            var leftTopFront = new Entities_2.Coordinate3D(x, y, z + dz);
            var rightTopFront = new Entities_2.Coordinate3D(x + dx, y, z + dz);
            var leftBottomFront = new Entities_2.Coordinate3D(x, y, z);
            var rightBottomFront = new Entities_2.Coordinate3D(x + dx, y, z);
            var leftTopBack = new Entities_2.Coordinate3D(x, y + dy, z + dz);
            var rightTopBack = new Entities_2.Coordinate3D(x + dx, y + dy, z + dz);
            var leftBottomBack = new Entities_2.Coordinate3D(x, y + dy, z);
            var rightBottomBack = new Entities_2.Coordinate3D(x + dx, y + dy, z);
            return [
                // front
                new Triangle3D_1.Triangle3D(leftBottomFront, rightBottomFront, leftTopFront),
                new Triangle3D_1.Triangle3D(leftTopFront, rightBottomFront, rightTopFront),
                // top
                new Triangle3D_1.Triangle3D(leftTopFront, rightTopFront, rightTopBack),
                new Triangle3D_1.Triangle3D(leftTopFront, leftTopBack, rightTopBack),
                // back
                new Triangle3D_1.Triangle3D(leftTopBack, rightTopBack, rightBottomBack),
                new Triangle3D_1.Triangle3D(leftBottomBack, rightBottomBack, leftTopBack),
                // bottom
                new Triangle3D_1.Triangle3D(leftBottomFront, rightBottomFront, rightBottomBack),
                new Triangle3D_1.Triangle3D(leftBottomFront, leftBottomBack, rightBottomBack),
                // left
                new Triangle3D_1.Triangle3D(leftBottomFront, leftTopFront, leftTopBack),
                new Triangle3D_1.Triangle3D(leftBottomFront, leftBottomBack, leftTopBack),
                // right
                new Triangle3D_1.Triangle3D(rightBottomFront, rightTopFront, rightTopBack),
                new Triangle3D_1.Triangle3D(rightBottomFront, rightBottomBack, rightTopBack),
            ];
        };
        return ColliderCube;
    }(Collider));
    exports.ColliderCube = ColliderCube;
    var ColliderUnion = /** @class */ (function (_super) {
        __extends(ColliderUnion, _super);
        function ColliderUnion(colliders) {
            var _this = _super.call(this) || this;
            _this.colliders = colliders;
            return _this;
        }
        ColliderUnion.prototype.collideCallback = function () {
            return "collideUnion";
        };
        ColliderUnion.prototype.triangles = function () {
            var triangles = this.colliders.map(function (c) { return c.triangles(); });
            return _.concat.apply(_, __spread([[]], triangles));
        };
        ColliderUnion.prototype.collide = function (second, direct) {
            if (direct === void 0) { direct = false; }
            return _.some(this.colliders, function (c) { return c.collide(second, direct); });
        };
        return ColliderUnion;
    }(Collider));
    exports.ColliderUnion = ColliderUnion;
    var ColliderPyramid = /** @class */ (function (_super) {
        __extends(ColliderPyramid, _super);
        function ColliderPyramid(coords, size) {
            var _this = _super.call(this) || this;
            _this.coords = coords;
            _this.size = size;
            return _this;
        }
        ColliderPyramid.prototype.collideCallback = function () {
            return "collidePyramid";
        };
        ColliderPyramid.prototype.triangles = function () {
            var d1 = new Entities_2.Coordinate3D(this.coords.x, this.coords.y, this.coords.z);
            var d2 = new Entities_2.Coordinate3D(this.coords.x + this.size.x, this.coords.y, this.coords.z);
            var d3 = new Entities_2.Coordinate3D(this.coords.x, this.coords.y, this.coords.z + this.size.z);
            var d4 = new Entities_2.Coordinate3D(this.coords.x + this.size.x, this.coords.y, this.coords.z + this.size.z);
            var u = new Entities_2.Coordinate3D(this.coords.x + this.size.x / 2, this.coords.y + this.size.y, this.coords.z + this.size.z / 2);
            return [
                new Triangle3D_1.Triangle3D(d1, d2, d3),
                new Triangle3D_1.Triangle3D(d1, d3, d4),
                new Triangle3D_1.Triangle3D(d1, d2, u),
                new Triangle3D_1.Triangle3D(d2, d3, u),
                new Triangle3D_1.Triangle3D(d3, d4, u),
                new Triangle3D_1.Triangle3D(d4, d1, u),
            ];
        };
        return ColliderPyramid;
    }(Collider));
    exports.ColliderPyramid = ColliderPyramid;
    var Collisionable = /** @class */ (function () {
        function Collisionable(o) {
            this.o = o;
        }
        Collisionable.prototype.collide = function (second) {
            return this.fastCollider().collide(second.fastCollider()) &&
                this.preciseCollider().collide(second.preciseCollider());
        };
        return Collisionable;
    }());
    exports.Collisionable = Collisionable;
});
define("CollisionEngine", ["require", "exports", "lodash"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    var CollisionEngine = /** @class */ (function () {
        function CollisionEngine() {
            this.staticObjects = [];
            this.dynamicObjects = [];
            this.handlers = {};
        }
        CollisionEngine.prototype.addStatic = function () {
            var _a;
            var _this = this;
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            (_a = this.staticObjects).push.apply(_a, __spread(_.reject(objects, function (o) { return _.includes(_this.staticObjects, o); })));
        };
        CollisionEngine.prototype.addDynamic = function () {
            var _a;
            var _this = this;
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            (_a = this.dynamicObjects).push.apply(_a, __spread(_.reject(objects, function (o) { return _.includes(_this.dynamicObjects, o); })));
        };
        CollisionEngine.prototype.removeStatic = function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            this.staticObjects = _.reject(this.staticObjects, function (o) { return _.includes(objects, o); });
        };
        CollisionEngine.prototype.removeDynamic = function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            this.dynamicObjects = _.reject(this.dynamicObjects, function (o) { return _.includes(objects, o); });
        };
        CollisionEngine.prototype.checkStaticOnly = function () {
            var e_9, _a, e_10, _b;
            try {
                //TODO optimize - can be precomputed
                for (var _c = __values(this.staticObjects), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var f = _d.value;
                    try {
                        for (var _e = (e_10 = void 0, __values(this.staticObjects)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var s = _f.value;
                            if (f !== s)
                                if (f.collide(s))
                                    this.invoke(f, s);
                        }
                    }
                    catch (e_10_1) { e_10 = { error: e_10_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                        }
                        finally { if (e_10) throw e_10.error; }
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
                }
                finally { if (e_9) throw e_9.error; }
            }
        };
        CollisionEngine.prototype.checkDynamicOnly = function () {
            var e_11, _a, e_12, _b;
            try {
                //TODO optimize as the last one
                for (var _c = __values(this.dynamicObjects), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var f = _d.value;
                    try {
                        for (var _e = (e_12 = void 0, __values(this.dynamicObjects)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var s = _f.value;
                            if (f !== s)
                                if (f.collide(s))
                                    this.invoke(f, s);
                        }
                    }
                    catch (e_12_1) { e_12 = { error: e_12_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                        }
                        finally { if (e_12) throw e_12.error; }
                    }
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
                }
                finally { if (e_11) throw e_11.error; }
            }
        };
        CollisionEngine.prototype.checkDynamicStatic = function () {
            var e_13, _a, e_14, _b;
            try {
                //TODO optimize
                for (var _c = __values(this.dynamicObjects), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var f = _d.value;
                    try {
                        for (var _e = (e_14 = void 0, __values(this.staticObjects)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var s = _f.value;
                            if (f.collide(s))
                                this.invoke(f, s);
                        }
                    }
                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                        }
                        finally { if (e_14) throw e_14.error; }
                    }
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
                }
                finally { if (e_13) throw e_13.error; }
            }
        };
        CollisionEngine.prototype.checkAll = function () {
            this.checkStaticOnly();
            this.checkDynamicStatic();
            this.checkDynamicOnly();
        };
        CollisionEngine.prototype.addListener = function (e1, e2, listener) {
            var s1 = e1.toString();
            var s2 = e2.toString();
            this.handlers[e1] = this.handlers[s1] || {};
            this.handlers[s1][s2] = this.handlers[s1][s2] || [];
            this.handlers[s1][s2].push(listener);
        };
        CollisionEngine.prototype.removeListener = function (e1, e2, listener) {
            var s1 = e1.toString();
            var s2 = e2.toString();
            if (this.handlers[s1] && this.handlers[s1][s2])
                _.remove(this.handlers[s1][s2], function (o) { return o === listener; });
        };
        CollisionEngine.prototype.invoke = function (o1, o2) {
            var e1 = o1.collisionType();
            var e2 = o2.collisionType();
            var s1 = e1.toString();
            var s2 = e2.toString();
            if (this.handlers[s1] && this.handlers[s1][s2])
                this.handlers[s1][s2].forEach(function (f) { return f(o1, o2); });
            if (this.handlers[s2] && this.handlers[s2][s1])
                this.handlers[s1][s2].forEach(function (f) { return f(o2, o1); });
        };
        return CollisionEngine;
    }());
    exports.CollisionEngine = CollisionEngine;
});
// TODO handle self destructing objects
define("Settings", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var defaultSettings = {
        keyboardSensitivity: 3,
        mouseSensetivity: 0.2,
        font: 'Press Start 2P',
        backgroundMusic: [
            "res/sound/Armatage Shanks - Broken Promise.mp3",
            "res/sound/Burn Halo - Dirty Little Girl (Official).mp3",
            "res/sound/Millencolin - No Cigar.mp3",
            "res/sound/NitroDive - Bad Blood.mp3",
            "res/sound/One Time A Year.mp3",
            "res/sound/Sin Shake Sin - Cant Go To Hell (Official Video).mp3",
            "res/sound/Theory of a Deadman - Bad Girlfriend [OFFICIAL VIDEO].mp3"
        ]
    };
    function settings() {
        return __assign({}, defaultSettings);
    }
    exports.settings = settings;
});
define("SoundEngine", ["require", "exports", "Settings"], function (require, exports, Settings_1) {
    "use strict";
    exports.__esModule = true;
    var SoundWrapper = /** @class */ (function () {
        function SoundWrapper(gain, buffer) {
            this.gain = gain;
            this.buffer = buffer;
        }
        return SoundWrapper;
    }());
    exports.SoundWrapper = SoundWrapper;
    var SoundEngine = /** @class */ (function () {
        function SoundEngine() {
            var _this = this;
            this.looping = [];
            this.backgroundBuffers = [];
            this.context = new AudioContext();
            Settings_1.settings().backgroundMusic.forEach(function (file) {
                _this.prepare(file).then(function (buffer) { return _this.backgroundBuffers.push(buffer); });
            });
        }
        SoundEngine.prototype.prepare = function (filepath) {
            return __awaiter(this, void 0, void 0, function () {
                var request, result;
                var _this = this;
                return __generator(this, function (_a) {
                    request = new XMLHttpRequest();
                    request.open('GET', filepath, true);
                    request.responseType = 'arraybuffer';
                    result = new Promise(function (resolve, reject) {
                        // Decode asynchronously
                        request.onload = function () {
                            _this.context.decodeAudioData(request.response, resolve, reject);
                        };
                    });
                    request.send();
                    return [2 /*return*/, result];
                });
            });
        };
        SoundEngine.prototype.playBackground = function () {
            var _this = this;
            if (this.backgroundBuffers.length === 0) {
                setTimeout(function () { return _this.playBackground(); }, 1000);
                return;
            }
            var i = Math.floor(Math.random() * this.backgroundBuffers.length);
            var wrapper = this.playInLoop(this.backgroundBuffers[i]);
            wrapper.buffer.loop = false;
            wrapper.gain.gain.value = 0.6;
            wrapper.buffer.addEventListener("ended", function () { return _this.playBackground(); });
        };
        SoundEngine.prototype.playInLoop = function (buffer, replacePrev) {
            var e_15, _a;
            if (replacePrev === void 0) { replacePrev = true; }
            if (replacePrev) {
                try {
                    for (var _b = __values(this.looping), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var source = _c.value;
                        source.gain.disconnect();
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
                this.looping = [];
            }
            var wrapper = this.playNow(buffer);
            wrapper.buffer.loop = true;
            this.looping.push(wrapper);
            return wrapper;
        };
        SoundEngine.prototype.playNow = function (buffer) {
            var gain = this.context.createGain();
            gain.gain.value = 1;
            gain.connect(this.context.destination);
            var source = this.context.createBufferSource();
            source.buffer = buffer;
            source.connect(gain);
            source.start(0);
            return new SoundWrapper(gain, source);
        };
        SoundEngine.prototype.getLooping = function () {
            return __spread(this.looping);
        };
        SoundEngine.prototype.resume = function () {
            this.context.resume();
        };
        return SoundEngine;
    }());
    var soundEngine = new SoundEngine();
    function sound() {
        return soundEngine;
    }
    exports.sound = sound;
});
define("EventEngine", ["require", "exports", "Settings", "SoundEngine", "lodash"], function (require, exports, Settings_2, SoundEngine_1, _) {
    "use strict";
    exports.__esModule = true;
    var defaultEventState = {
        pressed: {
            Enter: false,
        },
        verticalMovement: 0,
        horizontalMovement: 0,
        paused: false,
    };
    var PauseException = /** @class */ (function () {
        function PauseException() {
        }
        return PauseException;
    }());
    exports.PauseException = PauseException;
    var EventEngine = /** @class */ (function () {
        function EventEngine() {
            this.currentSetting = Settings_2.settings();
            this.pressedKeys = {
                up: false,
                down: false,
                left: false,
                right: false,
            };
            this.currentFrameEvents = __assign({}, defaultEventState);
        }
        EventEngine.prototype.attach = function (canvas) {
            var _this = this;
            window.addEventListener('keydown', function (ev) {
                SoundEngine_1.sound().resume();
                switch (ev.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        _this.pressedKeys.up = true;
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        _this.pressedKeys.down = true;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        _this.pressedKeys.left = true;
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        _this.pressedKeys.right = true;
                        break;
                }
            });
            window.addEventListener('keyup', function (ev) {
                SoundEngine_1.sound().resume();
                switch (ev.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        _this.pressedKeys.up = false;
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        _this.pressedKeys.down = false;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        _this.pressedKeys.left = false;
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        _this.pressedKeys.right = false;
                        break;
                }
            });
            window.addEventListener('keypress', function (ev) {
                canvas.requestPointerLock();
                SoundEngine_1.sound().resume();
                switch (ev.code) {
                    case 'KeyP':
                        _this.currentFrameEvents.paused = !_this.processingEvents.paused;
                        break;
                    case 'Enter':
                        _this.currentFrameEvents.pressed.Enter = true;
                        break;
                }
            });
            window.addEventListener('mouseup', function () {
                canvas.requestPointerLock();
            });
            window.addEventListener('mousedown', function () {
            });
            window.addEventListener('mousemove', function (ev) {
                _this.currentFrameEvents.verticalMovement -= ev.movementY * _this.currentSetting.mouseSensetivity;
                _this.currentFrameEvents.horizontalMovement += ev.movementX * _this.currentSetting.mouseSensetivity;
            });
            document.addEventListener('pointerlockchange', function (ev) {
                _this.currentFrameEvents.paused = !document.pointerLockElement;
            });
            document.addEventListener('pointerlockerror', function (ev) {
                console.error('Couldn\'t lock the mouse pointer', ev);
            });
        };
        EventEngine.prototype.nextFrame = function () {
            this.processingEvents = this.currentFrameEvents;
            this.currentFrameEvents = _.cloneDeep(defaultEventState);
            this.currentFrameEvents.paused = this.processingEvents.paused;
            if (this.pressedKeys.up)
                this.processingEvents.verticalMovement += this.currentSetting.keyboardSensitivity;
            if (this.pressedKeys.down)
                this.processingEvents.verticalMovement -= this.currentSetting.keyboardSensitivity;
            if (this.pressedKeys.left)
                this.processingEvents.horizontalMovement -= this.currentSetting.keyboardSensitivity;
            if (this.pressedKeys.right)
                this.processingEvents.horizontalMovement += this.currentSetting.keyboardSensitivity;
            this.processingEvents = Object.freeze(this.processingEvents);
        };
        EventEngine.prototype.checkPause = function () {
            if (this.getState().paused) {
                throw new PauseException();
            }
        };
        EventEngine.prototype.getState = function () {
            return this.processingEvents;
        };
        return EventEngine;
    }());
    exports.EventEngine = EventEngine;
});
define("utils/positionCalculation", ["require", "exports", "Entities"], function (require, exports, Entities_3) {
    "use strict";
    exports.__esModule = true;
    function _y(y, h) {
        return h - y;
    }
    function positionCalculation(point, center, word, canvas, distance, c) {
        var x = point.x, y = point.y, z = point.z;
        var Sx = center.x;
        var Sy = center.y;
        var w = canvas.w, h = canvas.h;
        var wc = word.w;
        var hc = word.h;
        var d = distance;
        var frac = Sy / Sx;
        var horiz = (Sy * y) / (d + y);
        var vert = horiz / (frac);
        var posY = (Sy - z) * vert / Sx + z;
        var posX = Sx;
        if (Math.abs(Sx - x) > Math.pow(2, -50)) {
            posX = (horiz + (Sy * x) / (Sx - x))
                /
                    (Sy / (Sx - x));
        }
        if (c) {
            var oldFill = c.fillStyle;
            var oldStroke = c.strokeStyle;
            var oldLineWidth = c.lineWidth;
            c.lineWidth = 1;
            //center
            c.fillStyle = '#00FF00';
            c.beginPath();
            c.arc(Sx * w / wc, _y(Sy * h / hc, h), 5, 0, 2 * Math.PI);
            c.fill();
            // to center
            c.strokeStyle = 'rgba(0,0,0,0.15)';
            c.beginPath();
            c.moveTo(0, _y(0, h));
            c.lineTo(Sx * w / wc, _y(Sy * h / hc, h));
            c.stroke();
            // from (x,0) to center
            c.strokeStyle = 'rgba(0,0,0,0.1)';
            c.beginPath();
            c.moveTo(x * w / wc, _y(0, h));
            c.lineTo(Sx * w / wc, _y(Sy * h / hc, h));
            c.stroke();
            // to eye
            c.strokeStyle = 'rgba(0,0,0,0.1)';
            c.beginPath();
            c.moveTo(y * w / wc, _y(0, h));
            c.lineTo(-distance * w / wc, _y(Sy * h / hc, h));
            c.stroke();
            //intersect
            c.fillStyle = '#0000FF';
            c.beginPath();
            c.arc(vert * w / wc, _y(horiz * h / hc, h), 5, 0, 2 * Math.PI);
            c.fill();
            // vert
            c.strokeStyle = 'rgba(0,0,255,0.15)';
            c.beginPath();
            c.moveTo(vert * w / wc, _y(0, h));
            c.lineTo(vert * w / wc, _y(h, h));
            c.stroke();
            // horiz
            c.strokeStyle = 'rgba(0,0,255,0.15)';
            c.beginPath();
            c.moveTo(0, _y(horiz * h / hc, h));
            c.lineTo(w, _y(horiz * h / hc, h));
            c.stroke();
            // line for x
            c.strokeStyle = 'rgba(255,0,0,0.15)';
            c.beginPath();
            c.moveTo(x * w / wc, _y(0, h));
            c.lineTo(Sx * w / wc, _y(Sy * h / hc, h));
            c.stroke();
            // line for z
            c.strokeStyle = 'rgba(255,0,0,0.15)';
            c.beginPath();
            c.moveTo(0, _y(z * h / hc, h));
            c.lineTo(Sx * w / wc, _y(Sy * h / hc, h));
            c.stroke();
            //s real x
            c.strokeStyle = 'rgba(0,255,0,0.15)';
            c.beginPath();
            c.moveTo(posX * w / wc, _y(0, h));
            c.lineTo(posX * w / wc, _y(h, h));
            c.stroke();
            // real y
            c.strokeStyle = 'rgba(0,255,0,0.15)';
            c.beginPath();
            c.moveTo(0, _y(posY * h / hc, h));
            c.lineTo(w, _y(posY * h / hc, h));
            c.stroke();
            // final point
            c.fillStyle = '#00FF00';
            c.beginPath();
            c.arc(posX * w / wc, _y(posY * h / hc, h), 5, 0, 2 * Math.PI);
            c.fill();
            c.strokeStyle = oldStroke;
            c.fillStyle = oldFill;
            c.lineWidth = oldLineWidth;
        }
        return new Entities_3.Coordinate(posX * w / wc, _y(posY * h / hc, h));
    }
    exports.positionCalculation = positionCalculation;
});
define("renderables/Renderable", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    //TODO optimize to use template instead of hardcoded parameters
    var Renderable = /** @class */ (function () {
        function Renderable() {
        }
        return Renderable;
    }());
    exports.Renderable = Renderable;
});
define("Renderer", ["require", "exports", "Entities", "utils/positionCalculation"], function (require, exports, Entities_4, positionCalculation_1) {
    "use strict";
    exports.__esModule = true;
    //TODO optimize to use template instead of hardcoded parameters
    var Renderer = /** @class */ (function () {
        function Renderer(context) {
            this.canvasSize = new Entities_4.Rect(0, 0);
            this.c = context;
        }
        Renderer.prototype.context = function () {
            return this.c;
        };
        Renderer.setStyle = function (style, context) {
            if (style) {
                var fill = style.fill, stroke = style.stroke, width = style.width, font = style.font, textAlign = style.textAlign;
                context.fillStyle = fill || context.fillStyle;
                context.strokeStyle = stroke || context.strokeStyle;
                context.lineWidth = width || context.lineWidth;
                context.font = font || context.font;
                context.textAlign = textAlign || textAlign;
            }
        };
        Renderer.getRenderMethod = function (style, context) {
            if (style && style.fill) {
                return context.fill.bind(context);
            }
            return context.stroke.bind(context);
        };
        Renderer.prototype.clear = function (style) {
            this.setStyle(style);
            this.c.fillRect(0, 0, this.c.canvas.width, this.c.canvas.height);
        };
        Renderer.prototype.setStyle = function (style) {
            Renderer.setStyle(style, this.c);
        };
        Renderer.prototype.newFrame = function (center, wordSize, distance, viewStart, viewDistance, background) {
            if (center === void 0) { center = null; }
            if (wordSize === void 0) { wordSize = null; }
            if (distance === void 0) { distance = null; }
            if (viewStart === void 0) { viewStart = null; }
            if (viewDistance === void 0) { viewDistance = null; }
            if (background === void 0) { background = '#FFFFFF'; }
            this.center = center || this.center;
            this.wordSize = wordSize || this.wordSize;
            this.distance = distance || this.distance;
            this.canvasSize.w = this.c.canvas.width;
            this.canvasSize.h = this.c.canvas.height;
            this.viewStart = viewStart || this.viewStart;
            this.viewDistance = viewDistance || this.viewDistance;
            this.clear({ fill: background });
        };
        Renderer.prototype.pointPosition = function (point) {
            return positionCalculation_1.positionCalculation(point, this.center, this.wordSize, this.canvasSize, this.distance);
        };
        Renderer.prototype.point = function (point, radius, style) {
            if (radius === void 0) { radius = 1; }
            if (style === void 0) { style = null; }
            Renderer.setStyle(style, this.c);
            var p = this.pointPosition(point);
            this.c.beginPath();
            this.c.arc(p.x, p.y, radius, 0, 2 * Math.PI);
            Renderer.getRenderMethod(style, this.c)();
        };
        Renderer.prototype.line = function (from, to, style) {
            if (style === void 0) { style = null; }
            Renderer.setStyle(style, this.c);
            var f = this.pointPosition(from);
            var t = this.pointPosition(to);
            this.c.beginPath();
            this.c.moveTo(f.x, f.y);
            this.c.lineTo(t.x, t.y);
            this.c.stroke();
        };
        Renderer.prototype.lines = function (lines, style) {
            var e_16, _a;
            if (style === void 0) { style = null; }
            try {
                for (var lines_1 = __values(lines), lines_1_1 = lines_1.next(); !lines_1_1.done; lines_1_1 = lines_1.next()) {
                    var line = lines_1_1.value;
                    this.line(line[0], line[1], style);
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (lines_1_1 && !lines_1_1.done && (_a = lines_1["return"])) _a.call(lines_1);
                }
                finally { if (e_16) throw e_16.error; }
            }
        };
        Renderer.prototype.render = function (o) {
            o.render(this.c, this.canvasSize, this.center, this.wordSize, this.distance, this.viewStart, this.viewDistance);
        };
        return Renderer;
    }());
    exports.Renderer = Renderer;
});
define("TimeManager", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var TimeManager = /** @class */ (function () {
        function TimeManager() {
            this.ticks = [performance.now()];
        }
        TimeManager.prototype.newFrame = function () {
            this.ticks.push(performance.now());
        };
        TimeManager.prototype.reportLastSecond = function () {
            var now = performance.now();
            this.ticks = this.ticks.filter(function (stamp) { return stamp > now - 1000; });
            console.log("AVG FPS: ", this.ticks.length);
        };
        TimeManager.prototype.reportCurrent = function () {
            var size = this.ticks.length;
            console.log("FPS: ", 1000 / (this.ticks[size - 1] - this.ticks[size - 2]));
        };
        TimeManager.prototype.delta = function () {
            var size = this.ticks.length;
            return (this.ticks[size - 1] - this.ticks[size - 2]) / 1000.0;
        };
        return TimeManager;
    }());
    exports.TimeManager = TimeManager;
});
define("levels/ILevel", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("renderables/TextRenderable", ["require", "exports", "Entities", "renderables/Renderable"], function (require, exports, Entities_5, Renderable_1) {
    "use strict";
    exports.__esModule = true;
    var TextRenderable = /** @class */ (function (_super) {
        __extends(TextRenderable, _super);
        function TextRenderable(text, position, fontSize, horizontalAlign, verticalAlign, maxSize) {
            if (maxSize === void 0) { maxSize = null; }
            var _this = _super.call(this) || this;
            _this.text = text;
            _this.position = position;
            _this.fontSize = fontSize;
            _this.horizontalAlign = horizontalAlign;
            _this.verticalAlign = verticalAlign;
            _this.maxSize = maxSize;
            _this.lines = null;
            _this.renderPosition = null;
            return _this;
        }
        // source: https://stackoverflow.com/a/16599668
        TextRenderable.prototype.getLines = function (ctx, text, maxWidth) {
            var words = text.split(" ");
            var lines = [];
            var currentLine = words[0];
            for (var i = 1; i < words.length; i++) {
                var word = words[i];
                var width = ctx.measureText(currentLine + " " + word).width;
                if (width < maxWidth) {
                    currentLine += " " + word;
                }
                else {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }
            lines.push(currentLine);
            return lines;
        };
        TextRenderable.prototype.render = function (context, canvasSize) {
            var maxSize = this.maxSize || canvasSize;
            // compute the properties for the first time
            // TODO handle font loading
            if (!this.lines || true) {
                this.lines = this.getLines(context, this.text, maxSize.w);
                this.renderPosition = new Entities_5.Coordinate(this.position.x, this.position.y);
                switch (this.horizontalAlign) {
                    case "right":
                        this.renderPosition.x += maxSize.w;
                        break;
                    case "center":
                        this.renderPosition.x += maxSize.w / 2;
                        break;
                    case "left":
                    default:
                        break;
                }
                var textHeight = this.lines.length * this.fontSize +
                    (this.lines.length - 1) * 0.3 * this.fontSize;
                switch (this.verticalAlign) {
                    case "end":
                        this.renderPosition.y += maxSize.h - textHeight;
                        break;
                    case "center":
                        this.renderPosition.y += maxSize.h / 2 - textHeight / 2;
                        break;
                    case "start":
                    default:
                        break;
                }
            }
            var oldTextAlignment = context.textAlign;
            context.textAlign = this.horizontalAlign;
            for (var i = 0; i < this.lines.length; i++) {
                var line = this.lines[i];
                context.fillText(line, this.renderPosition.x, this.renderPosition.y + i * this.fontSize * 1.3 + this.fontSize);
            }
            context.textAlign = oldTextAlignment;
        };
        return TextRenderable;
    }(Renderable_1.Renderable));
    exports.TextRenderable = TextRenderable;
});
define("levels/Level01", ["require", "exports", "Settings", "Entities", "renderables/TextRenderable"], function (require, exports, Settings_3, Entities_6, TextRenderable_1) {
    "use strict";
    exports.__esModule = true;
    var Level01 = /** @class */ (function () {
        function Level01() {
            this.shouldEnd = false;
        }
        Level01.prototype.nextFrame = function () {
        };
        Level01.prototype.update = function (delta, events) {
            this.shouldEnd = events.getState().pressed.Enter;
        };
        Level01.prototype.collisions = function () {
        };
        Level01.prototype.render = function (renderer) {
            renderer.newFrame();
            renderer.clear({ fill: '#FFFFFF' });
            renderer.setStyle({
                fill: '#000000',
                font: "40px \"" + Settings_3.settings().font + "\"",
            });
            renderer.render(new TextRenderable_1.TextRenderable('Press Enter to start', new Entities_6.Coordinate(0, 0), 40, 'center', 'center'));
        };
        Level01.prototype.finished = function () {
            return this.shouldEnd;
        };
        return Level01;
    }());
    exports.Level01 = Level01;
});
define("renderables/StyleRenderable", ["require", "exports", "renderables/Renderable", "Renderer"], function (require, exports, Renderable_2, Renderer_1) {
    "use strict";
    exports.__esModule = true;
    var StyleRenderable = /** @class */ (function (_super) {
        __extends(StyleRenderable, _super);
        function StyleRenderable(style, obj) {
            var _this = _super.call(this) || this;
            _this.style = style;
            _this.obj = obj;
            return _this;
        }
        StyleRenderable.prototype.render = function (context, canvasSize, center, wordSize, distance, viewStart, viewDistance) {
            Renderer_1.Renderer.setStyle(this.style, context);
            this.obj.render(context, canvasSize, center, wordSize, distance, viewStart, viewDistance);
        };
        return StyleRenderable;
    }(Renderable_2.Renderable));
    exports.StyleRenderable = StyleRenderable;
});
define("renderables/LineRenderable", ["require", "exports", "renderables/Renderable", "Entities", "utils/positionCalculation"], function (require, exports, Renderable_3, Entities_7, positionCalculation_2) {
    "use strict";
    exports.__esModule = true;
    var LineRenderable = /** @class */ (function (_super) {
        __extends(LineRenderable, _super);
        function LineRenderable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LineRenderable.prototype.recomputePoint = function (originalPoint, secondPoint, viewStart, viewDistance) {
            if (originalPoint.y < viewStart) {
                var t = (viewStart - originalPoint.y) / (secondPoint.y - originalPoint.y);
                return new Entities_7.Coordinate3D(originalPoint.x + t * (secondPoint.x - originalPoint.x), 0, originalPoint.z + t * (secondPoint.z - originalPoint.z));
            }
            else if (originalPoint.y > viewStart + viewDistance) {
                var t = (viewStart + viewDistance - originalPoint.y) / (secondPoint.y - originalPoint.y);
                return new Entities_7.Coordinate3D(originalPoint.x + t * (secondPoint.x - originalPoint.x), viewDistance, originalPoint.z + t * (secondPoint.z - originalPoint.z));
            }
            else
                return new Entities_7.Coordinate3D(originalPoint.x, originalPoint.y - viewStart, originalPoint.z);
        };
        LineRenderable.prototype.render = function (context, canvasSize, center, wordSize, distance, viewStart, viewDistance) {
            var e_17, _a;
            try {
                //TODO optimize
                for (var _b = __values(this.joins()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var join = _c.value;
                    if ((join[0].y > viewStart + viewDistance && join[1].y > viewStart + viewDistance) ||
                        (join[0].y < viewStart && join[1].y < viewStart))
                        continue;
                    var firstPoint = this.recomputePoint(join[0], join[1], viewStart, viewDistance);
                    var secondPoint = this.recomputePoint(join[1], join[0], viewStart, viewDistance);
                    var f = positionCalculation_2.positionCalculation(firstPoint, center, wordSize, canvasSize, distance);
                    var s = positionCalculation_2.positionCalculation(secondPoint, center, wordSize, canvasSize, distance);
                    context.beginPath();
                    context.moveTo(f.x, f.y);
                    context.lineTo(s.x, s.y);
                    context.stroke();
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_17) throw e_17.error; }
            }
        };
        LineRenderable.p = [];
        return LineRenderable;
    }(Renderable_3.Renderable));
    exports.LineRenderable = LineRenderable;
});
define("renderables/WorldRenderable", ["require", "exports", "renderables/LineRenderable", "Entities"], function (require, exports, LineRenderable_1, Entities_8) {
    "use strict";
    exports.__esModule = true;
    var WorldRenderable = /** @class */ (function (_super) {
        __extends(WorldRenderable, _super);
        function WorldRenderable(width, height, depth, moved) {
            var _this = _super.call(this) || this;
            _this.width = width;
            _this.height = height;
            _this.depth = depth;
            _this.moved = moved;
            return _this;
        }
        WorldRenderable.prototype.getPoints = function () {
            return __generator(this, function (_a) {
                //TODO
                return [2 /*return*/, undefined];
            });
        };
        WorldRenderable.prototype.joins = function () {
            var _a, width, height, depth, moved, pos, i, i, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, width = _a.width, height = _a.height, depth = _a.depth, moved = _a.moved;
                        pos = Math.floor(moved);
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i <= width)) return [3 /*break*/, 5];
                        return [4 /*yield*/, [
                                new Entities_8.Coordinate3D(i, pos, 0),
                                new Entities_8.Coordinate3D(i, depth, 0)
                            ]];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, [
                                new Entities_8.Coordinate3D(i, pos, height),
                                new Entities_8.Coordinate3D(i, depth, height)
                            ]];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5:
                        i = 0;
                        _b.label = 6;
                    case 6:
                        if (!(i <= height)) return [3 /*break*/, 10];
                        return [4 /*yield*/, [
                                new Entities_8.Coordinate3D(0, pos, i),
                                new Entities_8.Coordinate3D(0, depth, i)
                            ]];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, [
                                new Entities_8.Coordinate3D(width, pos, i),
                                new Entities_8.Coordinate3D(width, depth, i)
                            ]];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 6];
                    case 10:
                        i = 0;
                        _b.label = 11;
                    case 11:
                        if (!(i <= depth - moved + 1)) return [3 /*break*/, 17];
                        return [4 /*yield*/, [
                                new Entities_8.Coordinate3D(0, i + pos, 0),
                                new Entities_8.Coordinate3D(width, i + pos, 0)
                            ]];
                    case 12:
                        _b.sent();
                        return [4 /*yield*/, [
                                new Entities_8.Coordinate3D(width, i + pos, 0),
                                new Entities_8.Coordinate3D(width, i + pos, height)
                            ]];
                    case 13:
                        _b.sent();
                        return [4 /*yield*/, [
                                new Entities_8.Coordinate3D(width, i + pos, height),
                                new Entities_8.Coordinate3D(0, i + pos, height)
                            ]];
                    case 14:
                        _b.sent();
                        return [4 /*yield*/, [
                                new Entities_8.Coordinate3D(0, i + pos, height),
                                new Entities_8.Coordinate3D(0, i + pos, 0)
                            ]];
                    case 15:
                        _b.sent();
                        _b.label = 16;
                    case 16:
                        i++;
                        return [3 /*break*/, 11];
                    case 17: return [2 /*return*/];
                }
            });
        };
        return WorldRenderable;
    }(LineRenderable_1.LineRenderable));
    exports.WorldRenderable = WorldRenderable;
});
define("renderables/RenderableCube", ["require", "exports", "renderables/LineRenderable", "Entities"], function (require, exports, LineRenderable_2, Entities_9) {
    "use strict";
    exports.__esModule = true;
    var RenderableCube = /** @class */ (function (_super) {
        __extends(RenderableCube, _super);
        function RenderableCube(x, y, z, dx, dy, dz) {
            if (dx === void 0) { dx = 1; }
            if (dy === void 0) { dy = 1; }
            if (dz === void 0) { dz = 1; }
            var _this = _super.call(this) || this;
            _this.coords = new Entities_9.Coordinate3D(x, y, z);
            _this.diffs = new Entities_9.Coordinate3D(dx, dy, dz);
            return _this;
        }
        RenderableCube.prototype.getPoints = function () {
            var x, y, z;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = 0;
                        _a.label = 1;
                    case 1:
                        if (!(x < 1)) return [3 /*break*/, 8];
                        y = 0;
                        _a.label = 2;
                    case 2:
                        if (!(y < 1)) return [3 /*break*/, 7];
                        z = 0;
                        _a.label = 3;
                    case 3:
                        if (!(z < 1)) return [3 /*break*/, 6];
                        return [4 /*yield*/, new Entities_9.Coordinate3D(this.coords.x + x, this.coords.y + y, this.coords.z + z)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        z++;
                        return [3 /*break*/, 3];
                    case 6:
                        y++;
                        return [3 /*break*/, 2];
                    case 7:
                        x++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/];
                }
            });
        };
        RenderableCube.prototype.joins = function () {
            var _a, x, y, z, _b, dx, dy, dz, leftTopFront, rightTopFront, leftBottomFront, rightBottomFront, leftTopBack, rightTopBack, leftBottomBack, rightBottomBack;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.coords, x = _a.x, y = _a.y, z = _a.z;
                        _b = { dx: this.diffs.x, dy: this.diffs.y, dz: this.diffs.z }, dx = _b.dx, dy = _b.dy, dz = _b.dz;
                        leftTopFront = new Entities_9.Coordinate3D(x, y, z + dz);
                        rightTopFront = new Entities_9.Coordinate3D(x + dx, y, z + dz);
                        leftBottomFront = new Entities_9.Coordinate3D(x, y, z);
                        rightBottomFront = new Entities_9.Coordinate3D(x + dx, y, z);
                        leftTopBack = new Entities_9.Coordinate3D(x, y + dy, z + dz);
                        rightTopBack = new Entities_9.Coordinate3D(x + dx, y + dy, z + dz);
                        leftBottomBack = new Entities_9.Coordinate3D(x, y + dy, z);
                        rightBottomBack = new Entities_9.Coordinate3D(x + dx, y + dy, z);
                        return [5 /*yield**/, __values([
                                [leftTopFront, rightTopFront],
                                [leftTopFront, leftBottomFront],
                                [leftTopFront, leftTopBack],
                                [leftBottomFront, rightBottomFront],
                                [leftBottomFront, leftBottomBack],
                                [rightTopFront, rightBottomFront],
                                [rightTopFront, rightTopBack],
                                [rightBottomFront, rightBottomBack],
                                [leftTopBack, rightTopBack],
                                [leftTopBack, leftBottomBack],
                                [leftBottomBack, rightBottomBack],
                                [rightTopBack, rightBottomBack]
                            ])];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        };
        return RenderableCube;
    }(LineRenderable_2.LineRenderable));
    exports.RenderableCube = RenderableCube;
});
define("entities/GameEntity", ["require", "exports", "lodash", "deepFreeze"], function (require, exports, _, deepFreeze) {
    "use strict";
    exports.__esModule = true;
    var GameEntity = /** @class */ (function () {
        function GameEntity(defaultState) {
            this.state = defaultState;
            this.applyState();
        }
        GameEntity.prototype.applyState = function () {
            this.activeState = _.cloneDeep(this.state);
            deepFreeze(this.activeState);
        };
        GameEntity.prototype.rollbackState = function () {
            this.state = _.cloneDeep(this.activeState);
        };
        return GameEntity;
    }());
    exports.GameEntity = GameEntity;
});
define("entities/GameCube", ["require", "exports", "Entities", "renderables/RenderableCube", "entities/GameEntity", "ColliderEntities"], function (require, exports, Entities_10, RenderableCube_1, GameEntity_1, ColliderEntities_1) {
    "use strict";
    exports.__esModule = true;
    var CubeCollisionable = /** @class */ (function (_super) {
        __extends(CubeCollisionable, _super);
        function CubeCollisionable(cube) {
            return _super.call(this, cube) || this;
        }
        CubeCollisionable.prototype.fastCollider = function () {
            return new ColliderEntities_1.ColliderCube(this.o.state.coords, this.o.state.size);
        };
        CubeCollisionable.prototype.preciseCollider = function () {
            return new ColliderEntities_1.ColliderCube(this.o.state.coords, this.o.state.size);
        };
        CubeCollisionable.prototype.collisionType = function () {
            return GameCube;
        };
        return CubeCollisionable;
    }(ColliderEntities_1.Collisionable));
    var GameCube = /** @class */ (function (_super) {
        __extends(GameCube, _super);
        function GameCube(x, y, z, dx, dy, dz) {
            if (dx === void 0) { dx = 1; }
            if (dy === void 0) { dy = 1; }
            if (dz === void 0) { dz = 1; }
            return _super.call(this, {
                coords: new Entities_10.Coordinate3D(x, y, z),
                size: new Entities_10.Coordinate3D(dx, dy, dz)
            }) || this;
        }
        GameCube.prototype.isVisible = function (userPos, distance) {
            return (userPos < this.state.coords.y && this.state.coords.y < userPos + distance) ||
                (userPos < this.state.coords.y + this.state.size.y && this.state.coords.y + this.state.size.y < userPos + distance);
        };
        GameCube.prototype.getRenderable = function () {
            var _a = this.state.coords, x = _a.x, y = _a.y, z = _a.z;
            var dx = this.state.size.x;
            var dy = this.state.size.y;
            var dz = this.state.size.z;
            return new RenderableCube_1.RenderableCube(x, y, z, dx, dy, dz);
        };
        GameCube.prototype.getColliders = function () {
            return new CubeCollisionable(this);
        };
        return GameCube;
    }(GameEntity_1.GameEntity));
    exports.GameCube = GameCube;
});
define("renderables/RocketRenderable", ["require", "exports", "renderables/LineRenderable", "Entities", "utils/Triangle3D"], function (require, exports, LineRenderable_3, Entities_11, Triangle3D_2) {
    "use strict";
    exports.__esModule = true;
    var RocketRenderable = /** @class */ (function (_super) {
        __extends(RocketRenderable, _super);
        function RocketRenderable(pos, size) {
            var _this = _super.call(this) || this;
            _this.pos = pos;
            _this.size = size;
            _this.front = [];
            _this.around = [];
            _this.rwing = [];
            _this.lwing = [];
            _this.back = [];
            // front
            _this.frontVertex = new Entities_11.Coordinate3D(0.5 * _this.size.x, 1 * _this.size.y, 0.5 * _this.size.z);
            // front curve
            _this.front.push(new Entities_11.Coordinate3D(0.6 * _this.size.x, 0.7 * _this.size.y, 0.9 * _this.size.z));
            _this.front.push(new Entities_11.Coordinate3D(0.4 * _this.size.x, 0.7 * _this.size.y, 0.9 * _this.size.z));
            _this.front.push(new Entities_11.Coordinate3D(0.4 * _this.size.x, 0.7 * _this.size.y, 0.1 * _this.size.z));
            _this.front.push(new Entities_11.Coordinate3D(0.6 * _this.size.x, 0.7 * _this.size.y, 0.1 * _this.size.z));
            // around
            _this.around.push(new Entities_11.Coordinate3D(0.7 * _this.size.x, 0.4 * _this.size.y, 1 * _this.size.z));
            _this.around.push(new Entities_11.Coordinate3D(0.3 * _this.size.x, 0.4 * _this.size.y, 1 * _this.size.z));
            _this.around.push(new Entities_11.Coordinate3D(0.3 * _this.size.x, 0.4 * _this.size.y, 0 * _this.size.z));
            _this.around.push(new Entities_11.Coordinate3D(0.7 * _this.size.x, 0.4 * _this.size.y, 0 * _this.size.z));
            // back
            _this.back.push(new Entities_11.Coordinate3D(0.65 * _this.size.x, 0.2 * _this.size.y, 0.85 * _this.size.z));
            _this.back.push(new Entities_11.Coordinate3D(0.35 * _this.size.x, 0.2 * _this.size.y, 0.85 * _this.size.z));
            _this.back.push(new Entities_11.Coordinate3D(0.35 * _this.size.x, 0.2 * _this.size.y, 0.15 * _this.size.z));
            _this.back.push(new Entities_11.Coordinate3D(0.65 * _this.size.x, 0.2 * _this.size.y, 0.15 * _this.size.z));
            // right wing
            _this.rwing.push(new Entities_11.Coordinate3D(0.65 * _this.size.x, 0.2 * _this.size.y, 0.5 * _this.size.z));
            _this.rwing.push(new Entities_11.Coordinate3D(1 * _this.size.x, 0 * _this.size.y, 0.5 * _this.size.z));
            _this.rwing.push(new Entities_11.Coordinate3D(1 * _this.size.x, 0.5 * _this.size.y, 0.5 * _this.size.z));
            _this.rwing.push(new Entities_11.Coordinate3D(0.6 * _this.size.x, 0.7 * _this.size.y, 0.5 * _this.size.z));
            // left wing
            _this.lwing.push(new Entities_11.Coordinate3D(0.35 * _this.size.x, 0.2 * _this.size.y, 0.5 * _this.size.z));
            _this.lwing.push(new Entities_11.Coordinate3D(0 * _this.size.x, 0 * _this.size.y, 0.5 * _this.size.z));
            _this.lwing.push(new Entities_11.Coordinate3D(0 * _this.size.x, 0.5 * _this.size.y, 0.5 * _this.size.z));
            _this.lwing.push(new Entities_11.Coordinate3D(0.4 * _this.size.x, 0.7 * _this.size.y, 0.5 * _this.size.z));
            // back rockets
            // TRANSITION
            _this.frontVertex = Triangle3D_2.Triangle3D.plus(_this.frontVertex, _this.pos);
            _this.front = _this.front.map(function (p) { return Triangle3D_2.Triangle3D.plus(p, _this.pos); });
            _this.around = _this.around.map(function (p) { return Triangle3D_2.Triangle3D.plus(p, _this.pos); });
            _this.back = _this.back.map(function (p) { return Triangle3D_2.Triangle3D.plus(p, _this.pos); });
            _this.rwing = _this.rwing.map(function (p) { return Triangle3D_2.Triangle3D.plus(p, _this.pos); });
            _this.lwing = _this.lwing.map(function (p) { return Triangle3D_2.Triangle3D.plus(p, _this.pos); });
            return _this;
        }
        RocketRenderable.prototype.getPoints = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.frontVertex];
                    case 1:
                        _a.sent();
                        return [5 /*yield**/, __values(this.front)];
                    case 2:
                        _a.sent();
                        //TODO
                        return [2 /*return*/, undefined];
                }
            });
        };
        RocketRenderable.prototype.joins = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // front pike
                    return [4 /*yield*/, [this.frontVertex, this.front[0]]];
                    case 1:
                        // front pike
                        _a.sent();
                        return [4 /*yield*/, [this.frontVertex, this.front[1]]];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, [this.frontVertex, this.front[2]]];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, [this.frontVertex, this.front[3]]];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, [this.front[0], this.front[1]]];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, [this.front[1], this.front[2]]];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, [this.front[2], this.front[3]]];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, [this.front[3], this.front[0]]];
                    case 8:
                        _a.sent();
                        // body
                        return [4 /*yield*/, [this.front[0], this.around[0]]];
                    case 9:
                        // body
                        _a.sent();
                        return [4 /*yield*/, [this.around[0], this.back[0]]];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, [this.front[1], this.around[1]]];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, [this.around[1], this.back[1]]];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, [this.front[2], this.around[2]]];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, [this.around[2], this.back[2]]];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, [this.front[3], this.around[3]]];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, [this.around[3], this.back[3]]];
                    case 16:
                        _a.sent();
                        // join around
                        //yield [this.around[0], this.around[1]];
                        //yield [this.around[1], this.around[2]];
                        //yield [this.around[2], this.around[3]];
                        //yield [this.around[3], this.around[0]];
                        // join back
                        return [4 /*yield*/, [this.back[0], this.back[1]]];
                    case 17:
                        // join around
                        //yield [this.around[0], this.around[1]];
                        //yield [this.around[1], this.around[2]];
                        //yield [this.around[2], this.around[3]];
                        //yield [this.around[3], this.around[0]];
                        // join back
                        _a.sent();
                        return [4 /*yield*/, [this.back[1], this.back[2]]];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, [this.back[2], this.back[3]]];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, [this.back[3], this.back[0]]];
                    case 20:
                        _a.sent();
                        // left wing
                        return [4 /*yield*/, [this.lwing[0], this.lwing[1]]];
                    case 21:
                        // left wing
                        _a.sent();
                        return [4 /*yield*/, [this.lwing[1], this.lwing[2]]];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, [this.lwing[2], this.lwing[3]]];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, [this.lwing[3], this.lwing[0]]];
                    case 24:
                        _a.sent();
                        // right wing
                        return [4 /*yield*/, [this.rwing[0], this.rwing[1]]];
                    case 25:
                        // right wing
                        _a.sent();
                        return [4 /*yield*/, [this.rwing[1], this.rwing[2]]];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, [this.rwing[2], this.rwing[3]]];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, [this.rwing[3], this.rwing[0]]];
                    case 28:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        };
        return RocketRenderable;
    }(LineRenderable_3.LineRenderable));
    exports.RocketRenderable = RocketRenderable;
});
define("entities/GameRocket", ["require", "exports", "Entities", "renderables/RocketRenderable", "entities/GameEntity", "ColliderEntities"], function (require, exports, Entities_12, RocketRenderable_1, GameEntity_2, ColliderEntities_2) {
    "use strict";
    exports.__esModule = true;
    var RocketCollision = /** @class */ (function (_super) {
        __extends(RocketCollision, _super);
        function RocketCollision(o) {
            return _super.call(this, o) || this;
        }
        RocketCollision.prototype.collisionType = function () {
            return GameRocket;
        };
        RocketCollision.prototype.fastCollider = function () {
            return new ColliderEntities_2.ColliderCube(this.o.state.coords, GameRocket.SIZE);
        };
        RocketCollision.prototype.preciseCollider = function () {
            return new ColliderEntities_2.ColliderCube(this.o.state.coords, GameRocket.SIZE);
        };
        return RocketCollision;
    }(ColliderEntities_2.Collisionable));
    var GameRocket = /** @class */ (function (_super) {
        __extends(GameRocket, _super);
        function GameRocket(startPos) {
            if (startPos === void 0) { startPos = new Entities_12.Coordinate3D(); }
            return _super.call(this, {
                coords: new Entities_12.Coordinate3D(startPos.x, startPos.y, startPos.z)
            }) || this;
        }
        GameRocket.prototype.getRenderable = function () {
            return new RocketRenderable_1.RocketRenderable(this.state.coords, GameRocket.SIZE);
        };
        GameRocket.prototype.getColliders = function () {
            return new RocketCollision(this);
        };
        GameRocket.SIZE = new Entities_12.Coordinate3D(0.6, 1.5, 0.3);
        return GameRocket;
    }(GameEntity_2.GameEntity));
    exports.GameRocket = GameRocket;
});
define("entities/GameWorld", ["require", "exports", "Entities", "entities/GameEntity", "ColliderEntities", "renderables/WorldRenderable"], function (require, exports, Entities_13, GameEntity_3, ColliderEntities_3, WorldRenderable_1) {
    "use strict";
    exports.__esModule = true;
    var WorldCollisionable = /** @class */ (function (_super) {
        __extends(WorldCollisionable, _super);
        function WorldCollisionable(cube) {
            return _super.call(this, cube) || this;
        }
        WorldCollisionable.prototype.fastCollider = function () {
            var THICKNESS = 100;
            return new ColliderEntities_3.ColliderUnion([
                // left
                new ColliderEntities_3.ColliderCube(new Entities_13.Coordinate3D(-THICKNESS, 0, -THICKNESS), new Entities_13.Coordinate3D(THICKNESS, this.o.state.size.y, this.o.state.size.z + 2 * THICKNESS)),
                // top
                new ColliderEntities_3.ColliderCube(new Entities_13.Coordinate3D(-THICKNESS, 0, this.o.state.size.z), new Entities_13.Coordinate3D(this.o.state.size.x + 2 * THICKNESS, this.o.state.size.y, THICKNESS)),
                // right
                new ColliderEntities_3.ColliderCube(new Entities_13.Coordinate3D(this.o.state.size.x, 0, -THICKNESS), new Entities_13.Coordinate3D(THICKNESS, this.o.state.size.y, this.o.state.size.z + 2 * THICKNESS)),
                // bottom
                new ColliderEntities_3.ColliderCube(new Entities_13.Coordinate3D(-THICKNESS, 0, -THICKNESS), new Entities_13.Coordinate3D(this.o.state.size.x + 2 * THICKNESS, this.o.state.size.y, THICKNESS)),
            ]);
        };
        WorldCollisionable.prototype.preciseCollider = function () {
            return this.fastCollider();
        };
        WorldCollisionable.prototype.collisionType = function () {
            return GameWorld;
        };
        return WorldCollisionable;
    }(ColliderEntities_3.Collisionable));
    var GameWorld = /** @class */ (function (_super) {
        __extends(GameWorld, _super);
        function GameWorld(size) {
            return _super.call(this, {
                size: size,
            }) || this;
        }
        GameWorld.prototype.getRenderable = function (moved) {
            return new WorldRenderable_1.WorldRenderable(this.state.size.x, this.state.size.z, this.state.size.y, moved);
        };
        GameWorld.prototype.getColliders = function () {
            return new WorldCollisionable(this);
        };
        return GameWorld;
    }(GameEntity_3.GameEntity));
    exports.GameWorld = GameWorld;
});
define("renderables/EndRenderable", ["require", "exports", "renderables/Renderable", "Entities", "utils/positionCalculation"], function (require, exports, Renderable_4, Entities_14, positionCalculation_3) {
    "use strict";
    exports.__esModule = true;
    var EndRenderable = /** @class */ (function (_super) {
        __extends(EndRenderable, _super);
        function EndRenderable(yPosition) {
            var _this = _super.call(this) || this;
            _this.yPosition = yPosition;
            return _this;
        }
        EndRenderable.prototype.render = function (context, canvasSize, center, wordSize, distance, viewStart, viewDistance) {
            if (this.yPosition < viewStart || viewStart + viewDistance < this.yPosition)
                return;
            var leftDown = positionCalculation_3.positionCalculation(new Entities_14.Coordinate3D(0, this.yPosition - viewStart, 0), center, wordSize, canvasSize, distance);
            var topRight = positionCalculation_3.positionCalculation(new Entities_14.Coordinate3D(wordSize.w, this.yPosition - viewStart, wordSize.h), center, wordSize, canvasSize, distance);
            context.fillRect(leftDown.x, topRight.y, topRight.x - leftDown.x, leftDown.y - topRight.y);
        };
        return EndRenderable;
    }(Renderable_4.Renderable));
    exports.EndRenderable = EndRenderable;
});
define("entities/GameEnd", ["require", "exports", "Entities", "entities/GameEntity", "ColliderEntities", "renderables/EndRenderable"], function (require, exports, Entities_15, GameEntity_4, ColliderEntities_4, EndRenderable_1) {
    "use strict";
    exports.__esModule = true;
    var EndCollisionable = /** @class */ (function (_super) {
        __extends(EndCollisionable, _super);
        function EndCollisionable(end) {
            return _super.call(this, end) || this;
        }
        EndCollisionable.prototype.fastCollider = function () {
            return this.preciseCollider();
        };
        EndCollisionable.prototype.preciseCollider = function () {
            return new ColliderEntities_4.ColliderCube(new Entities_15.Coordinate3D(-Number.MAX_VALUE, this.o.state.yIndex, -Number.MAX_VALUE), new Entities_15.Coordinate3D(Infinity, Infinity, Infinity));
        };
        EndCollisionable.prototype.collisionType = function () {
            return GameEnd;
        };
        return EndCollisionable;
    }(ColliderEntities_4.Collisionable));
    var GameEnd = /** @class */ (function (_super) {
        __extends(GameEnd, _super);
        function GameEnd(levelDepth) {
            return _super.call(this, {
                yIndex: levelDepth
            }) || this;
        }
        GameEnd.prototype.getRenderable = function () {
            return new EndRenderable_1.EndRenderable(this.state.yIndex);
        };
        GameEnd.prototype.getColliders = function () {
            return new EndCollisionable(this);
        };
        return GameEnd;
    }(GameEntity_4.GameEntity));
    exports.GameEnd = GameEnd;
});
define("renderables/RenderablePyramid", ["require", "exports", "renderables/LineRenderable", "Entities"], function (require, exports, LineRenderable_4, Entities_16) {
    "use strict";
    exports.__esModule = true;
    var RenderablePyramid = /** @class */ (function (_super) {
        __extends(RenderablePyramid, _super);
        function RenderablePyramid(coords, size) {
            var _this = _super.call(this) || this;
            _this.coords = coords;
            _this.size = size;
            return _this;
        }
        RenderablePyramid.prototype.getPoints = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Entities_16.Coordinate3D(this.coords.x, this.coords.y, this.coords.z)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Entities_16.Coordinate3D(this.coords.x + this.size.x, this.coords.y, this.coords.z)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, new Entities_16.Coordinate3D(this.coords.x, this.coords.y, this.coords.z + this.size.z)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, new Entities_16.Coordinate3D(this.coords.x + this.size.x, this.coords.y, this.coords.z + this.size.z)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, new Entities_16.Coordinate3D(this.coords.x + this.size.x / 2, this.coords.y + this.size.y, this.coords.z + this.size.z / 2)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        };
        RenderablePyramid.prototype.joins = function () {
            var d1, d2, d3, d4, u;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d1 = new Entities_16.Coordinate3D(this.coords.x, this.coords.y, this.coords.z);
                        d2 = new Entities_16.Coordinate3D(this.coords.x + this.size.x, this.coords.y, this.coords.z);
                        d3 = new Entities_16.Coordinate3D(this.coords.x + this.size.x, this.coords.y + this.size.y, this.coords.z);
                        d4 = new Entities_16.Coordinate3D(this.coords.x, this.coords.y + this.size.y, this.coords.z);
                        u = new Entities_16.Coordinate3D(this.coords.x + this.size.x / 2, this.coords.y + this.size.y / 2, this.coords.z + this.size.z);
                        return [5 /*yield**/, __values([
                                [d1, d2],
                                [d2, d3],
                                [d3, d4],
                                [d4, d1],
                                [d1, u],
                                [d2, u],
                                [d3, u],
                                [d4, u],
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        };
        return RenderablePyramid;
    }(LineRenderable_4.LineRenderable));
    exports.RenderablePyramid = RenderablePyramid;
});
define("entities/GamePyramid", ["require", "exports", "Entities", "entities/GameEntity", "ColliderEntities", "renderables/RenderablePyramid"], function (require, exports, Entities_17, GameEntity_5, ColliderEntities_5, RenderablePyramid_1) {
    "use strict";
    exports.__esModule = true;
    var PyramidCollisionable = /** @class */ (function (_super) {
        __extends(PyramidCollisionable, _super);
        function PyramidCollisionable(cube) {
            return _super.call(this, cube) || this;
        }
        PyramidCollisionable.prototype.fastCollider = function () {
            return new ColliderEntities_5.ColliderCube(this.o.state.coords, this.o.state.size);
        };
        PyramidCollisionable.prototype.preciseCollider = function () {
            return new ColliderEntities_5.ColliderPyramid(this.o.state.coords, this.o.state.size);
        };
        PyramidCollisionable.prototype.collisionType = function () {
            return GamePyramid;
        };
        return PyramidCollisionable;
    }(ColliderEntities_5.Collisionable));
    var GamePyramid = /** @class */ (function (_super) {
        __extends(GamePyramid, _super);
        function GamePyramid(x, y, z, dx, dy, dz) {
            if (dx === void 0) { dx = 1; }
            if (dy === void 0) { dy = 1; }
            if (dz === void 0) { dz = 1; }
            return _super.call(this, {
                coords: new Entities_17.Coordinate3D(x, y, z),
                size: new Entities_17.Coordinate3D(dx, dy, dz)
            }) || this;
        }
        GamePyramid.prototype.isVisible = function (userPos, distance) {
            return (userPos < this.state.coords.y && this.state.coords.y < userPos + distance) ||
                (userPos < this.state.coords.y + this.state.size.y && this.state.coords.y + this.state.size.y < userPos + distance);
        };
        GamePyramid.prototype.getRenderable = function () {
            return new RenderablePyramid_1.RenderablePyramid(this.state.coords, this.state.size);
        };
        GamePyramid.prototype.getColliders = function () {
            return new PyramidCollisionable(this);
        };
        return GamePyramid;
    }(GameEntity_5.GameEntity));
    exports.GamePyramid = GamePyramid;
});
define("levels/LevelTesting", ["require", "exports", "Entities", "renderables/StyleRenderable", "entities/GameCube", "entities/GameRocket", "CollisionEngine", "entities/GameWorld", "entities/GameEnd", "entities/GamePyramid"], function (require, exports, Entities_18, StyleRenderable_1, GameCube_1, GameRocket_1, CollisionEngine_1, GameWorld_1, GameEnd_1, GamePyramid_1) {
    "use strict";
    exports.__esModule = true;
    var LevelTesting = /** @class */ (function () {
        function LevelTesting() {
            var _a;
            var _this = this;
            this.center = new Entities_18.Coordinate(4, 3);
            this.distance = 10;
            this.viewDistance = 20;
            this.levelRunning = true;
            this.user = new GameRocket_1.GameRocket();
            this.obstacles = [
                new GamePyramid_1.GamePyramid(0, 4, 0, 2, 2, 5),
                new GamePyramid_1.GamePyramid(5, 11, 5),
                new GamePyramid_1.GamePyramid(5, 14, 5),
                new GamePyramid_1.GamePyramid(4, 15, 5),
                new GamePyramid_1.GamePyramid(3, 17, 4),
                new GamePyramid_1.GamePyramid(4, 17, 4),
                new GamePyramid_1.GamePyramid(0, 20, 0, 2, 4, 2),
                new GamePyramid_1.GamePyramid(4, 25, 4),
                new GamePyramid_1.GamePyramid(5, 25, 4),
                new GamePyramid_1.GamePyramid(5, 25, 5),
                new GamePyramid_1.GamePyramid(1, 26, 1),
                new GamePyramid_1.GamePyramid(0, 5, 0, 1, 8, 1),
                new GamePyramid_1.GamePyramid(16, 25, 10, 4, 4, 4),
            ];
            this.world = new GameWorld_1.GameWorld(new Entities_18.Coordinate3D(8, 50, 6));
            this.end = new GameEnd_1.GameEnd(35);
            this.collisionEngine = new CollisionEngine_1.CollisionEngine();
            this.user.state.coords.x = 4;
            this.user.state.coords.y = 0;
            this.user.state.coords.z = 0.00000001;
            (_a = this.collisionEngine).addStatic.apply(_a, __spread(this.obstacles.map(function (c) { return c.getColliders(); })));
            this.collisionEngine.addStatic(this.world.getColliders());
            this.collisionEngine.addStatic(this.end.getColliders());
            this.collisionEngine.addDynamic(this.user.getColliders());
            this.collisionEngine.addListener(GameRocket_1.GameRocket, GameCube_1.GameCube, function (rocket, cube) {
                console.log("Game over");
            });
            this.collisionEngine.addListener(GameRocket_1.GameRocket, GameWorld_1.GameWorld, function (rocket, world) {
                var ypos = rocket.o.state.coords.y;
                rocket.o.rollbackState();
                rocket.o.state.coords.y = ypos;
            });
            this.collisionEngine.addListener(GameRocket_1.GameRocket, GameEnd_1.GameEnd, function (rocket, end) {
                _this.levelRunning = false;
            });
        }
        LevelTesting.prototype.nextFrame = function () {
        };
        LevelTesting.prototype.update = function (delta, events) {
            this.user.state.coords.y += delta;
            this.user.state.coords.x += events.getState().horizontalMovement * delta;
        };
        LevelTesting.prototype.collisions = function () {
            this.collisionEngine.checkAll();
            this.user.applyState();
        };
        LevelTesting.prototype.render = function (renderer) {
            var viewStart = this.user.state.coords.y - 2;
            renderer.newFrame(this.center, new Entities_18.Rect(this.world.state.size.x, this.world.state.size.z), this.distance, viewStart, this.viewDistance);
            renderer.render(new StyleRenderable_1.StyleRenderable({ stroke: '#000000', width: 1 }, this.world.getRenderable(viewStart)));
            renderer.render(new StyleRenderable_1.StyleRenderable({ fill: 'rgba(157,255,129, 0.6)' }, this.end.getRenderable()));
            this.obstacles
                //.filter(c => c.isVisible(viewStart, 20))
                .forEach(function (c) { return renderer.render(new StyleRenderable_1.StyleRenderable({ stroke: '#0000FF', width: 2 }, c.getRenderable())); });
            renderer.render(new StyleRenderable_1.StyleRenderable({ stroke: '#FF0000', width: 2 }, this.user.getRenderable()));
        };
        LevelTesting.prototype.finished = function () {
            return !this.levelRunning;
        };
        return LevelTesting;
    }());
    exports.LevelTesting = LevelTesting;
});
define("levels/Level02", ["require", "exports", "SoundEngine"], function (require, exports, SoundEngine_2) {
    "use strict";
    exports.__esModule = true;
    var Level02 = /** @class */ (function () {
        function Level02(timeoutInvoke) {
            var _this = this;
            var image = new Image();
            image.addEventListener('load', function () {
                _this.image = image;
                timeoutInvoke();
            });
            image.src = "res/img/Intro.jpg";
            SoundEngine_2.sound().prepare("res/sound/Bladehand.mp3").then(function (buffer) {
                SoundEngine_2.sound().playInLoop(buffer);
            });
        }
        Level02.prototype.nextFrame = function () {
        };
        Level02.prototype.update = function (delta, events) {
        };
        Level02.prototype.collisions = function () {
        };
        Level02.prototype.render = function (renderer) {
            if (this.image) {
                renderer.clear({ fill: '#FFFFFF' });
                var c = renderer.context();
                c.drawImage(this.image, 0, 0, c.canvas.width, c.canvas.height);
            }
        };
        Level02.prototype.finished = function () {
            return false;
        };
        return Level02;
    }());
    exports.Level02 = Level02;
});
define("levels/Level03", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Level03 = /** @class */ (function () {
        function Level03(timeoutInvoke) {
            var _this = this;
            var image = new Image();
            image.addEventListener('load', function () {
                _this.image = image;
                timeoutInvoke();
            });
            image.src = "res/img/logo.jpg";
        }
        Level03.prototype.nextFrame = function () {
        };
        Level03.prototype.update = function (delta, events) {
        };
        Level03.prototype.collisions = function () {
        };
        Level03.prototype.render = function (renderer) {
            if (this.image) {
                renderer.clear({ fill: '#FFFFFF' });
                var c = renderer.context();
                c.drawImage(this.image, 0, 0, c.canvas.width, c.canvas.height);
            }
        };
        Level03.prototype.finished = function () {
            return false;
        };
        return Level03;
    }());
    exports.Level03 = Level03;
});
define("levels/SkippableLevel", ["require", "exports", "Settings"], function (require, exports, Settings_4) {
    "use strict";
    exports.__esModule = true;
    var SkippableLevel = /** @class */ (function () {
        function SkippableLevel(innerLevel, foreground, skipped) {
            if (foreground === void 0) { foreground = '#FFFFFF'; }
            if (skipped === void 0) { skipped = null; }
            this.innerLevel = innerLevel;
            this.foreground = foreground;
            this.skipped = skipped;
            this.shouldEnd = false;
        }
        SkippableLevel.prototype.nextFrame = function () {
            this.innerLevel.nextFrame();
        };
        SkippableLevel.prototype.update = function (delta, events) {
            this.shouldEnd = events.getState().pressed.Enter;
            if (this.shouldEnd && this.skipped)
                this.skipped(this.innerLevel);
            this.innerLevel.update(delta, events);
        };
        SkippableLevel.prototype.collisions = function () {
            this.innerLevel.collisions();
        };
        SkippableLevel.prototype.render = function (renderer) {
            this.innerLevel.render(renderer);
            var c = renderer.context();
            renderer.setStyle({
                fill: this.foreground,
                font: "12px \"" + Settings_4.settings().font + "\"",
                textAlign: 'left',
            });
            c.fillText("Press Enter to skip", 4, 16);
        };
        SkippableLevel.prototype.finished = function () {
            return this.shouldEnd || this.innerLevel.finished();
        };
        return SkippableLevel;
    }());
    exports.SkippableLevel = SkippableLevel;
});
define("levels/TimedLevel", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var TimedLevel = /** @class */ (function () {
        function TimedLevel(innerLevel, timeToShow) {
            var _this = this;
            this.shouldEnd = false;
            var timeoutCall = function () {
                setTimeout(function () { return _this.shouldEnd = true; }, timeToShow);
            };
            if (typeof innerLevel === 'function') {
                this.innerLevel = innerLevel(timeoutCall);
            }
            else {
                this.innerLevel = innerLevel;
                timeoutCall();
            }
        }
        TimedLevel.prototype.nextFrame = function () {
            this.innerLevel.nextFrame();
        };
        TimedLevel.prototype.update = function (delta, events) {
            this.innerLevel.update(delta, events);
        };
        TimedLevel.prototype.collisions = function () {
            this.innerLevel.collisions();
        };
        TimedLevel.prototype.render = function (renderer) {
            this.innerLevel.render(renderer);
        };
        TimedLevel.prototype.finished = function () {
            return this.shouldEnd || this.innerLevel.finished();
        };
        return TimedLevel;
    }());
    exports.TimedLevel = TimedLevel;
});
define("renderables/BorderRenderable", ["require", "exports", "renderables/Renderable", "Entities"], function (require, exports, Renderable_5, Entities_19) {
    "use strict";
    exports.__esModule = true;
    var BorderRenderable = /** @class */ (function (_super) {
        __extends(BorderRenderable, _super);
        function BorderRenderable(borderSize, pos, size) {
            if (pos === void 0) { pos = new Entities_19.Coordinate(); }
            if (size === void 0) { size = new Entities_19.Rect(); }
            var _this = _super.call(this) || this;
            _this.borderSize = borderSize;
            _this.pos = pos;
            _this.size = size;
            return _this;
        }
        BorderRenderable.prototype.render = function (context, canvasSize) {
            var startX = this.pos && this.pos.x || 0;
            var startY = this.pos && this.pos.y || 0;
            var width = this.size && this.size.w || canvasSize.w - startX;
            var height = this.size && this.size.h || canvasSize.h - startY;
            // TODO render borders from pictures
            context.fillRect(startX, startY, width, this.borderSize);
            context.fillRect(startX, startY, this.borderSize, height);
            context.fillRect(startX + width - this.borderSize, startY, this.borderSize, height);
            context.fillRect(startX, startY + height - this.borderSize, width, this.borderSize);
        };
        return BorderRenderable;
    }(Renderable_5.Renderable));
    exports.BorderRenderable = BorderRenderable;
});
define("renderables/ImageRenderable", ["require", "exports", "renderables/Renderable", "Entities"], function (require, exports, Renderable_6, Entities_20) {
    "use strict";
    exports.__esModule = true;
    var ImageRenderable = /** @class */ (function (_super) {
        __extends(ImageRenderable, _super);
        function ImageRenderable(image, destPos, sourceRect, sourcePos, destRect) {
            if (destPos === void 0) { destPos = new Entities_20.Coordinate(); }
            if (sourceRect === void 0) { sourceRect = null; }
            if (sourcePos === void 0) { sourcePos = null; }
            if (destRect === void 0) { destRect = null; }
            var _this = _super.call(this) || this;
            _this.image = image;
            _this.destPos = destPos;
            _this.sourceRect = sourceRect;
            _this.sourcePos = sourcePos;
            _this.destRect = destRect;
            return _this;
        }
        ImageRenderable.prototype.render = function (context, canvasSize) {
            var image = this.image;
            var sx = this.sourcePos && this.sourcePos.x;
            var sy = this.sourcePos && this.sourcePos.y;
            var sWidth = this.sourceRect && this.sourceRect.w;
            var sHeight = this.sourceRect && this.sourceRect.h;
            var dx = this.destPos.x;
            var dy = this.destPos.y;
            var dWidth = this.destRect && this.destRect.w;
            var dHeight = this.destRect && this.destRect.h;
            if (this.sourcePos && this.sourceRect && this.sourceRect && this.destRect)
                return context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            if (this.destPos && this.destRect)
                return context.drawImage(image, dx, dy, dWidth, dHeight);
            if (this.destPos)
                return context.drawImage(image, dx, dy);
            else
                throw new Error("Couldn't draw image, because parameters are missing");
        };
        return ImageRenderable;
    }(Renderable_6.Renderable));
    exports.ImageRenderable = ImageRenderable;
});
define("levels/TextWithPictureLevel", ["require", "exports", "renderables/StyleRenderable", "renderables/BorderRenderable", "renderables/ImageRenderable", "Entities", "renderables/TextRenderable", "Settings"], function (require, exports, StyleRenderable_2, BorderRenderable_1, ImageRenderable_1, Entities_21, TextRenderable_2, Settings_5) {
    "use strict";
    exports.__esModule = true;
    var TextWithPictureLevel = /** @class */ (function () {
        function TextWithPictureLevel(img, text, imgPos, textSize) {
            var _this = this;
            if (imgPos === void 0) { imgPos = 'left'; }
            if (textSize === void 0) { textSize = 26; }
            this.text = text;
            this.imgPos = imgPos;
            this.textSize = textSize;
            var source = new Image();
            source.addEventListener('load', function () { return _this.imgSource = source; });
            source.src = img;
        }
        TextWithPictureLevel.prototype.nextFrame = function () {
        };
        TextWithPictureLevel.prototype.update = function (delta, events) {
        };
        TextWithPictureLevel.prototype.collisions = function () {
        };
        TextWithPictureLevel.prototype.render = function (renderer) {
            var borders = 25;
            renderer.render(new StyleRenderable_2.StyleRenderable({ fill: '#FF0000' }, new BorderRenderable_1.BorderRenderable(borders)));
            var h = renderer.context().canvas.height - 2 * borders;
            var ratio = this.imgSource.height / this.imgSource.width;
            var w = h / ratio;
            var x = this.imgPos === 'left' ? 0 : renderer.context().canvas.width - borders - w;
            var phi = (1 + Math.sqrt(5)) / 2;
            var phi_ = 1 / phi;
            renderer.render(new ImageRenderable_1.ImageRenderable(this.imgSource, new Entities_21.Coordinate(x + w * (1 - phi_) / 2, borders + w * (1 - phi_) / 2), new Entities_21.Rect(this.imgSource.width, this.imgSource.height), new Entities_21.Coordinate(0, 0), new Entities_21.Rect(w * phi_, h * phi_)));
            var wText = renderer.context().canvas.width - 2 * borders - w;
            var fontSize = this.textSize;
            var textBorders = fontSize * phi;
            var xText = this.imgPos === 'left' ? w + borders : borders + textBorders;
            renderer.setStyle({
                fill: '#000000',
                font: fontSize + "px \"" + Settings_5.settings().font + "\"",
                textAlign: 'left'
            });
            renderer.render(new TextRenderable_2.TextRenderable(this.text, new Entities_21.Coordinate(xText, borders + textBorders), fontSize, 'left', 'start', new Entities_21.Rect(wText - textBorders, Infinity)));
        };
        TextWithPictureLevel.prototype.finished = function () {
            return false;
        };
        return TextWithPictureLevel;
    }());
    exports.TextWithPictureLevel = TextWithPictureLevel;
});
define("levels/Level04", ["require", "exports", "levels/TextWithPictureLevel", "SoundEngine"], function (require, exports, TextWithPictureLevel_1, SoundEngine_3) {
    "use strict";
    exports.__esModule = true;
    var Level04 = /** @class */ (function (_super) {
        __extends(Level04, _super);
        function Level04(done) {
            var _this = _super.call(this, "res/img/Space_Captain.png", "Soldier, welcome to this highly classified facility of Czech Security Information Service. We built this facility without public knowledge to protect Earth against unknown threats from the Universe. You have the honor to become the first line of this protection. To achieve that, you must undergo intensive training, to be the best between all others. You gonna start with our fighter spaceships CH14, the fundamental equipment of our armament. You can see spaceship position on the radar in front of you. Use MOUSE or ARROW KEYS to control the spaceship.", 'left', 34) || this;
            SoundEngine_3.sound().getLooping().forEach(function (val) { return val.gain.gain.value = 0.1; });
            SoundEngine_3.sound().prepare("res/sound/introduction_speech.mp3").then(function (buffer) {
                _this.wrapper = SoundEngine_3.sound().playNow(buffer);
                _this.wrapper.buffer.addEventListener("ended", done);
            });
            return _this;
        }
        Level04.prototype.skipped = function () {
            this.wrapper.buffer.stop(0);
        };
        return Level04;
    }(TextWithPictureLevel_1.TextWithPictureLevel));
    exports.Level04 = Level04;
});
define("levels/Level05", ["require", "exports", "Entities", "renderables/StyleRenderable", "entities/GameRocket", "CollisionEngine", "entities/GameWorld", "entities/GameEnd", "SoundEngine"], function (require, exports, Entities_22, StyleRenderable_3, GameRocket_2, CollisionEngine_2, GameWorld_2, GameEnd_2, SoundEngine_4) {
    "use strict";
    exports.__esModule = true;
    var Level05 = /** @class */ (function () {
        function Level05() {
            var _this = this;
            this.center = new Entities_22.Coordinate(4, 3);
            this.distance = 10;
            this.viewDistance = 20;
            this.levelRunning = true;
            this.user = new GameRocket_2.GameRocket();
            this.world = new GameWorld_2.GameWorld(new Entities_22.Coordinate3D(8, 50, 6));
            this.end = new GameEnd_2.GameEnd(30);
            this.collisionEngine = new CollisionEngine_2.CollisionEngine();
            SoundEngine_4.sound().playBackground();
            this.user.state.coords.x = 4;
            this.user.state.coords.y = 0;
            this.user.state.coords.z = 0.00000001;
            this.collisionEngine.addStatic(this.world.getColliders());
            this.collisionEngine.addStatic(this.end.getColliders());
            this.collisionEngine.addDynamic(this.user.getColliders());
            this.collisionEngine.addListener(GameRocket_2.GameRocket, GameWorld_2.GameWorld, function (rocket, world) {
                var ypos = rocket.o.state.coords.y;
                rocket.o.rollbackState();
                rocket.o.state.coords.y = ypos;
            });
            this.collisionEngine.addListener(GameRocket_2.GameRocket, GameEnd_2.GameEnd, function (rocket, end) {
                _this.levelRunning = false;
            });
        }
        Level05.prototype.nextFrame = function () {
        };
        Level05.prototype.update = function (delta, events) {
            this.user.state.coords.y += delta;
            this.user.state.coords.x += events.getState().horizontalMovement * delta;
        };
        Level05.prototype.collisions = function () {
            this.collisionEngine.checkDynamicStatic();
            this.user.applyState();
        };
        Level05.prototype.render = function (renderer) {
            var viewStart = this.user.state.coords.y - 2;
            renderer.newFrame(this.center, new Entities_22.Rect(this.world.state.size.x, this.world.state.size.z), this.distance, viewStart, this.viewDistance);
            renderer.render(new StyleRenderable_3.StyleRenderable({ stroke: '#000000', width: 1 }, this.world.getRenderable(viewStart)));
            renderer.render(new StyleRenderable_3.StyleRenderable({ fill: 'rgba(157,255,129, 0.6)' }, this.end.getRenderable()));
            renderer.render(new StyleRenderable_3.StyleRenderable({ stroke: '#FF0000', width: 2 }, this.user.getRenderable()));
        };
        Level05.prototype.finished = function () {
            return !this.levelRunning;
        };
        return Level05;
    }());
    exports.Level05 = Level05;
});
define("levels/Level06", ["require", "exports", "levels/TextWithPictureLevel", "SoundEngine"], function (require, exports, TextWithPictureLevel_2, SoundEngine_5) {
    "use strict";
    exports.__esModule = true;
    var Level06 = /** @class */ (function (_super) {
        __extends(Level06, _super);
        function Level06(done) {
            var _this = _super.call(this, "res/img/Space_Captain.png", "Great work, soldier. Your performance is extraordinary. But now, let's test your agility because that is what makes the best of the best. In this simulation, you will control the spaceship between crates and mountains. Avoid them, because if you crash into them, its gonna be a quick death.", 'left', 36) || this;
            SoundEngine_5.sound().getLooping().forEach(function (val) { return val.gain.gain.value = 0.1; });
            SoundEngine_5.sound().prepare("res/sound/agility_speech.mp3").then(function (buffer) {
                _this.wrapper = SoundEngine_5.sound().playNow(buffer);
                _this.wrapper.buffer.addEventListener("ended", done);
            });
            return _this;
        }
        Level06.prototype.skipped = function () {
            this.wrapper.buffer.stop(0);
        };
        return Level06;
    }(TextWithPictureLevel_2.TextWithPictureLevel));
    exports.Level06 = Level06;
});
define("renderables/AnimatedImageRenderable", ["require", "exports", "renderables/Renderable"], function (require, exports, Renderable_7) {
    "use strict";
    exports.__esModule = true;
    var AnimatedImageRenderable = /** @class */ (function (_super) {
        __extends(AnimatedImageRenderable, _super);
        function AnimatedImageRenderable(images, changeTime, emptyTime) {
            if (emptyTime === void 0) { emptyTime = 0; }
            var _this = _super.call(this) || this;
            _this.images = images;
            _this.changeTime = changeTime;
            _this.emptyTime = emptyTime;
            _this.currentTime = 0;
            return _this;
        }
        AnimatedImageRenderable.prototype.update = function (delta) {
            this.currentTime += delta;
            this.currentTime %= this.images.length * this.changeTime + this.emptyTime;
        };
        AnimatedImageRenderable.prototype.render = function (context, canvasSize) {
            var i = Math.floor(this.currentTime / this.changeTime);
            if (i < this.images.length)
                this.images[i].render(context, canvasSize);
        };
        return AnimatedImageRenderable;
    }(Renderable_7.Renderable));
    exports.AnimatedImageRenderable = AnimatedImageRenderable;
});
define("levels/LostLevel", ["require", "exports", "renderables/AnimatedImageRenderable", "renderables/ImageRenderable", "lodash", "renderables/TextRenderable", "Entities", "renderables/StyleRenderable", "Settings", "SoundEngine"], function (require, exports, AnimatedImageRenderable_1, ImageRenderable_2, _, TextRenderable_3, Entities_23, StyleRenderable_4, Settings_6, SoundEngine_6) {
    "use strict";
    exports.__esModule = true;
    var LostLevel = /** @class */ (function () {
        function LostLevel() {
            this.renderable = null;
            this.explosion = _.range(1, 19)
                .map(function (n) { return "res/img/explosion/" + n + ".png"; })
                .map(function (path) {
                var img = new Image();
                img.src = path;
                return img;
            });
            SoundEngine_6.sound().prepare("res/sound/Soliloquy.mp3").then(function (buffer) { return SoundEngine_6.sound().playInLoop(buffer); });
        }
        LostLevel.prototype.nextFrame = function () {
        };
        LostLevel.prototype.update = function (delta, events) {
            if (this.renderable)
                this.renderable.update(delta);
        };
        LostLevel.prototype.collisions = function () {
        };
        LostLevel.prototype.render = function (renderer) {
            renderer.clear({ fill: '#000000' });
            var h = renderer.context().canvas.height;
            var w = renderer.context().canvas.width;
            if (!this.renderable && _.every(this.explosion, function (img) { return !!img.width; })) {
                this.renderable = new AnimatedImageRenderable_1.AnimatedImageRenderable(this.explosion
                    .map(function (img) { return new ImageRenderable_2.ImageRenderable(img, new Entities_23.Coordinate(w / 2 - img.width / 2, 0.5 * h / 3), new Entities_23.Rect(img.width, img.height), new Entities_23.Coordinate(), new Entities_23.Rect(img.width, h / 3)); }), 0.1, 2);
            }
            if (this.renderable)
                renderer.render(this.renderable);
            renderer.render(new StyleRenderable_4.StyleRenderable({
                fill: '#FFFFFF',
                textAlign: 'center',
                font: Math.min(h / 4, 54) + "px \"" + Settings_6.settings().font + "\"",
            }, new TextRenderable_3.TextRenderable("You died", new Entities_23.Coordinate(0, 2 * h / 3), Math.min(h / 4, 54), 'center', 'start')));
        };
        LostLevel.prototype.finished = function () {
            return false;
        };
        return LostLevel;
    }());
    exports.LostLevel = LostLevel;
});
define("levels/Level07", ["require", "exports", "Entities", "renderables/StyleRenderable", "entities/GameRocket", "CollisionEngine", "entities/GameWorld", "entities/GameEnd", "entities/GamePyramid", "levels/LostLevel", "SoundEngine"], function (require, exports, Entities_24, StyleRenderable_5, GameRocket_3, CollisionEngine_3, GameWorld_3, GameEnd_3, GamePyramid_2, LostLevel_1, SoundEngine_7) {
    "use strict";
    exports.__esModule = true;
    var Level07 = /** @class */ (function () {
        function Level07() {
            var _a;
            var _this = this;
            this.center = new Entities_24.Coordinate(5, 4);
            this.distance = 10;
            this.viewDistance = 20;
            this.collisionEngine = new CollisionEngine_3.CollisionEngine();
            this.levelEnd = false;
            this.user = new GameRocket_3.GameRocket(new Entities_24.Coordinate3D(5, 0, 0.000001));
            this.world = new GameWorld_3.GameWorld(new Entities_24.Coordinate3D(10, 90, 8));
            this.end = new GameEnd_3.GameEnd(60);
            this.obstacles = [
                new GamePyramid_2.GamePyramid(0, 3, 0, 2, 2, 2),
                new GamePyramid_2.GamePyramid(6, 7, 0, 3, 1, 1),
                new GamePyramid_2.GamePyramid(2, 9, 0, 2, 2, 3),
                new GamePyramid_2.GamePyramid(7, 9, 0, 3, 3, 4),
                new GamePyramid_2.GamePyramid(0, 13, 0, 1, 1, 3),
                new GamePyramid_2.GamePyramid(1, 15, 0, 1, 1, 1),
                new GamePyramid_2.GamePyramid(2, 17, 0, 1, 1, 2),
                new GamePyramid_2.GamePyramid(3, 19, 0, 1, 1, 1),
                new GamePyramid_2.GamePyramid(6, 13, 0, 3, 2, 4),
                new GamePyramid_2.GamePyramid(8, 18, 0, 2, 1, 2),
                new GamePyramid_2.GamePyramid(7, 20, 0, 1, 1, 3),
                new GamePyramid_2.GamePyramid(0, 23, 0, 2, 3, 7),
                new GamePyramid_2.GamePyramid(5, 23, 0, 3, 3, 7),
                new GamePyramid_2.GamePyramid(1, 27, 0, 1, 1, 6),
                new GamePyramid_2.GamePyramid(2, 29, 0, 1, 1, 5),
                new GamePyramid_2.GamePyramid(3, 31, 0, 1, 1, 6),
                new GamePyramid_2.GamePyramid(8, 27, 0, 1, 1, 6),
                new GamePyramid_2.GamePyramid(7, 29, 0, 1, 1, 4),
                new GamePyramid_2.GamePyramid(6, 31, 0, 1, 1, 5),
                new GamePyramid_2.GamePyramid(1, 34, 0, 2, 1, 1),
                new GamePyramid_2.GamePyramid(3, 36, 0, 2, 1, 1),
                new GamePyramid_2.GamePyramid(5, 38, 0, 2, 1, 2),
                new GamePyramid_2.GamePyramid(0, 38, 0, 3, 3, 7),
                new GamePyramid_2.GamePyramid(2, 41, 0, 1, 3, 3),
                new GamePyramid_2.GamePyramid(5, 43, 0, 5, 3, 8),
                new GamePyramid_2.GamePyramid(5, 46, 0, 1, 1, 7),
                new GamePyramid_2.GamePyramid(4, 47, 0, 1, 1, 7),
                new GamePyramid_2.GamePyramid(6, 48, 0, 2, 2, 6),
                new GamePyramid_2.GamePyramid(8, 50, 0, 2, 2, 7),
                new GamePyramid_2.GamePyramid(0, 50, 0, 2, 2, 5),
                new GamePyramid_2.GamePyramid(1, 52, 0, 1, 1, 4),
                new GamePyramid_2.GamePyramid(0, 53, 0, 2, 2, 6),
                new GamePyramid_2.GamePyramid(1, 55, 0, 1, 1, 7),
                new GamePyramid_2.GamePyramid(2, 55, 0, 2, 2, 8),
                new GamePyramid_2.GamePyramid(4, 53, 0, 2, 2, 4),
            ];
            SoundEngine_7.sound().playBackground();
            (_a = this.collisionEngine).addStatic.apply(_a, __spread(this.obstacles.map(function (o) { return o.getColliders(); })));
            this.collisionEngine.addStatic(this.world.getColliders());
            this.collisionEngine.addStatic(this.end.getColliders());
            this.collisionEngine.addDynamic(this.user.getColliders());
            this.collisionEngine.addListener(GameRocket_3.GameRocket, GameWorld_3.GameWorld, function (rocket) {
                var ypos = rocket.o.state.coords.y;
                rocket.o.rollbackState();
                rocket.o.state.coords.y = ypos;
            });
            this.collisionEngine.addListener(GameRocket_3.GameRocket, GameEnd_3.GameEnd, function () { return _this.levelEnd = true; });
            this.collisionEngine.addListener(GameRocket_3.GameRocket, GamePyramid_2.GamePyramid, function () {
                _this.levelEnd = new LostLevel_1.LostLevel();
            });
        }
        Level07.prototype.nextFrame = function () {
        };
        Level07.prototype.update = function (delta, events) {
            this.user.state.coords.y += delta * 2;
            this.user.state.coords.x += events.getState().horizontalMovement * delta;
        };
        Level07.prototype.collisions = function () {
            this.collisionEngine.checkDynamicStatic();
            this.user.applyState();
        };
        Level07.prototype.render = function (renderer) {
            var _this = this;
            var viewStart = this.user.state.coords.y - 2;
            renderer.newFrame(this.center, new Entities_24.Rect(this.world.state.size.x, this.world.state.size.z), this.distance, viewStart, this.viewDistance);
            renderer.render(new StyleRenderable_5.StyleRenderable({ stroke: '#000000', width: 1 }, this.world.getRenderable(viewStart)));
            renderer.render(new StyleRenderable_5.StyleRenderable({ fill: 'rgba(157,255,129, 0.6)' }, this.end.getRenderable()));
            renderer.setStyle({ stroke: '#2e70ff', width: 2 });
            this.obstacles.filter(function (o) { return o.isVisible(viewStart, _this.viewDistance); })
                .map(function (o) { return o.getRenderable(); })
                .forEach(function (r) { return renderer.render(r); });
            renderer.render(new StyleRenderable_5.StyleRenderable({ stroke: '#FF0000', width: 2 }, this.user.getRenderable()));
        };
        Level07.prototype.finished = function () {
            return this.levelEnd;
        };
        return Level07;
    }());
    exports.Level07 = Level07;
});
define("levels/Level08", ["require", "exports", "levels/TextWithPictureLevel", "SoundEngine"], function (require, exports, TextWithPictureLevel_3, SoundEngine_8) {
    "use strict";
    exports.__esModule = true;
    var Level08 = /** @class */ (function (_super) {
        __extends(Level08, _super);
        function Level08(done) {
            var _this = _super.call(this, "res/img/Space_Captain.png", "Your first mission is waiting for you. Your task is to explore asteroid belt nearby. Don't forget that you are in space now, there are more than just two directions of movement.", 'left', 36) || this;
            SoundEngine_8.sound().getLooping().forEach(function (val) { return val.gain.gain.value = 0.1; });
            SoundEngine_8.sound().prepare("res/sound/asteroids_speech.mp3").then(function (buffer) {
                _this.wrapper = SoundEngine_8.sound().playNow(buffer);
                _this.wrapper.buffer.addEventListener("ended", done);
            });
            return _this;
        }
        Level08.prototype.skipped = function () {
            this.wrapper.buffer.stop(0);
        };
        return Level08;
    }(TextWithPictureLevel_3.TextWithPictureLevel));
    exports.Level08 = Level08;
});
define("levels/Level09", ["require", "exports", "Entities", "renderables/StyleRenderable", "entities/GameRocket", "CollisionEngine", "entities/GameWorld", "entities/GameEnd", "levels/LostLevel", "SoundEngine", "entities/GameCube"], function (require, exports, Entities_25, StyleRenderable_6, GameRocket_4, CollisionEngine_4, GameWorld_4, GameEnd_4, LostLevel_2, SoundEngine_9, GameCube_2) {
    "use strict";
    exports.__esModule = true;
    //TODO create template for levels
    var Level09 = /** @class */ (function () {
        function Level09() {
            var _a;
            var _this = this;
            this.center = new Entities_25.Coordinate(5, 4);
            this.distance = 10;
            this.viewDistance = 20;
            this.collisionEngine = new CollisionEngine_4.CollisionEngine();
            this.levelEnd = false;
            this.user = new GameRocket_4.GameRocket(new Entities_25.Coordinate3D(5, 0, 0.000001));
            this.world = new GameWorld_4.GameWorld(new Entities_25.Coordinate3D(10, 90, 8));
            this.end = new GameEnd_4.GameEnd(60);
            this.obstacles = [
                new GameCube_2.GameCube(0, 5, 0, 3, 3, 4),
                new GameCube_2.GameCube(8, 9, 1, 2, 3, 8),
                new GameCube_2.GameCube(3, 10, 7, 6, 2, 3),
                new GameCube_2.GameCube(0, 15, 0, 10, 2, 3),
                new GameCube_2.GameCube(0, 15, 6, 10, 2, 3),
                new GameCube_2.GameCube(0, 15, 3, 4, 2, 3),
                new GameCube_2.GameCube(6, 15, 3, 4, 2, 3),
                new GameCube_2.GameCube(3, 25, 3, 6, 4, 3),
                new GameCube_2.GameCube(2, 35, 3, 3, 6, 2),
                new GameCube_2.GameCube(8, 39, 6, 2, 1, 2),
                new GameCube_2.GameCube(1, 49, 1, 2, 4, 2),
                new GameCube_2.GameCube(7, 49, 1, 2, 4, 2),
            ];
            SoundEngine_9.sound().playBackground();
            (_a = this.collisionEngine).addStatic.apply(_a, __spread(this.obstacles.map(function (o) { return o.getColliders(); })));
            this.collisionEngine.addStatic(this.world.getColliders());
            this.collisionEngine.addStatic(this.end.getColliders());
            this.collisionEngine.addDynamic(this.user.getColliders());
            this.collisionEngine.addListener(GameRocket_4.GameRocket, GameWorld_4.GameWorld, function (rocket) {
                var ypos = rocket.o.state.coords.y;
                rocket.o.rollbackState();
                rocket.o.state.coords.y = ypos;
            });
            this.collisionEngine.addListener(GameRocket_4.GameRocket, GameEnd_4.GameEnd, function () { return _this.levelEnd = true; });
            this.collisionEngine.addListener(GameRocket_4.GameRocket, GameCube_2.GameCube, function () {
                _this.levelEnd = new LostLevel_2.LostLevel();
            });
        }
        Level09.prototype.nextFrame = function () {
        };
        Level09.prototype.update = function (delta, events) {
            this.user.state.coords.y += delta * 2;
            this.user.state.coords.x += events.getState().horizontalMovement * delta;
            this.user.state.coords.z += events.getState().verticalMovement * delta;
        };
        Level09.prototype.collisions = function () {
            this.collisionEngine.checkDynamicStatic();
            this.user.applyState();
        };
        Level09.prototype.render = function (renderer) {
            var _this = this;
            var viewStart = this.user.state.coords.y - 2;
            renderer.newFrame(this.center, new Entities_25.Rect(this.world.state.size.x, this.world.state.size.z), this.distance, viewStart, this.viewDistance);
            renderer.render(new StyleRenderable_6.StyleRenderable({ stroke: '#000000', width: 1 }, this.world.getRenderable(viewStart)));
            renderer.render(new StyleRenderable_6.StyleRenderable({ fill: 'rgba(157,255,129, 0.6)' }, this.end.getRenderable()));
            renderer.setStyle({ stroke: '#2e70ff', width: 2 });
            this.obstacles.filter(function (o) { return o.isVisible(viewStart, _this.viewDistance); })
                .map(function (o) { return o.getRenderable(); })
                .forEach(function (r) { return renderer.render(r); });
            renderer.render(new StyleRenderable_6.StyleRenderable({ stroke: '#FF0000', width: 2 }, this.user.getRenderable()));
        };
        Level09.prototype.finished = function () {
            return this.levelEnd;
        };
        return Level09;
    }());
    exports.Level09 = Level09;
});
define("levels/Level10", ["require", "exports", "levels/TextWithPictureLevel", "SoundEngine"], function (require, exports, TextWithPictureLevel_4, SoundEngine_10) {
    "use strict";
    exports.__esModule = true;
    var Level10 = /** @class */ (function (_super) {
        __extends(Level10, _super);
        function Level10(done) {
            var _this = _super.call(this, "res/img/Space_Captain.png", "Now similar missions is ahead. Except, you will be testing this new plane UH-250, that has improved radar. Do not be confused.", 'left', 36) || this;
            SoundEngine_10.sound().getLooping().forEach(function (val) { return val.gain.gain.value = 0.1; });
            SoundEngine_10.sound().prepare("res/sound/radar_speech.mp3").then(function (buffer) {
                _this.wrapper = SoundEngine_10.sound().playNow(buffer);
                _this.wrapper.buffer.addEventListener("ended", done);
            });
            return _this;
        }
        Level10.prototype.skipped = function () {
            this.wrapper.buffer.stop(0);
        };
        return Level10;
    }(TextWithPictureLevel_4.TextWithPictureLevel));
    exports.Level10 = Level10;
});
define("levels/Level11", ["require", "exports", "Entities", "renderables/StyleRenderable", "entities/GameRocket", "CollisionEngine", "entities/GameWorld", "entities/GameEnd", "levels/LostLevel", "SoundEngine", "entities/GameCube"], function (require, exports, Entities_26, StyleRenderable_7, GameRocket_5, CollisionEngine_5, GameWorld_5, GameEnd_5, LostLevel_3, SoundEngine_11, GameCube_3) {
    "use strict";
    exports.__esModule = true;
    //TODO create template for levels
    var Level11 = /** @class */ (function () {
        function Level11() {
            var _a;
            var _this = this;
            this.center = new Entities_26.Coordinate(5, 4);
            this.distance = 10;
            this.viewDistance = 20;
            this.collisionEngine = new CollisionEngine_5.CollisionEngine();
            this.levelEnd = false;
            this.user = new GameRocket_5.GameRocket(new Entities_26.Coordinate3D(5, 0, 4));
            this.world = new GameWorld_5.GameWorld(new Entities_26.Coordinate3D(10, 90, 8));
            this.end = new GameEnd_5.GameEnd(60);
            this.obstacles = [
                new GameCube_3.GameCube(0, 5, 0, 3, 3, 4),
                new GameCube_3.GameCube(8, 9, 1, 2, 3, 8),
                new GameCube_3.GameCube(3, 10, 7, 6, 2, 3),
                new GameCube_3.GameCube(0, 15, 0, 10, 2, 3),
                new GameCube_3.GameCube(0, 15, 6, 10, 2, 3),
                new GameCube_3.GameCube(0, 15, 3, 4, 2, 3),
                new GameCube_3.GameCube(6, 15, 3, 4, 2, 3),
                new GameCube_3.GameCube(3, 25, 3, 6, 4, 3),
                new GameCube_3.GameCube(2, 35, 3, 3, 6, 2),
                new GameCube_3.GameCube(8, 39, 6, 2, 1, 2),
                new GameCube_3.GameCube(1, 49, 1, 2, 4, 2),
                new GameCube_3.GameCube(7, 49, 1, 2, 4, 2),
            ];
            SoundEngine_11.sound().playBackground();
            (_a = this.collisionEngine).addStatic.apply(_a, __spread(this.obstacles.map(function (o) { return o.getColliders(); })));
            this.collisionEngine.addStatic(this.world.getColliders());
            this.collisionEngine.addStatic(this.end.getColliders());
            this.collisionEngine.addDynamic(this.user.getColliders());
            this.collisionEngine.addListener(GameRocket_5.GameRocket, GameWorld_5.GameWorld, function (rocket) {
                var ypos = rocket.o.state.coords.y;
                rocket.o.rollbackState();
                rocket.o.state.coords.y = ypos;
            });
            this.collisionEngine.addListener(GameRocket_5.GameRocket, GameEnd_5.GameEnd, function () { return _this.levelEnd = true; });
            this.collisionEngine.addListener(GameRocket_5.GameRocket, GameCube_3.GameCube, function () {
                _this.levelEnd = new LostLevel_3.LostLevel();
            });
        }
        Level11.prototype.nextFrame = function () {
        };
        Level11.prototype.update = function (delta, events) {
            this.user.state.coords.y += delta * 2;
            this.user.state.coords.x += events.getState().horizontalMovement * delta;
            this.user.state.coords.z += events.getState().verticalMovement * delta;
            this.center.x = 3 + this.user.state.coords.x / this.world.state.size.x * 4.0;
            this.center.y = 3 + this.user.state.coords.z / this.world.state.size.z * 2.0;
        };
        Level11.prototype.collisions = function () {
            this.collisionEngine.checkDynamicStatic();
            this.user.applyState();
        };
        Level11.prototype.render = function (renderer) {
            var _this = this;
            var viewStart = this.user.state.coords.y - 2;
            renderer.newFrame(this.center, new Entities_26.Rect(this.world.state.size.x, this.world.state.size.z), this.distance, viewStart, this.viewDistance);
            renderer.render(new StyleRenderable_7.StyleRenderable({ stroke: '#000000', width: 1 }, this.world.getRenderable(viewStart)));
            renderer.render(new StyleRenderable_7.StyleRenderable({ fill: 'rgba(157,255,129, 0.6)' }, this.end.getRenderable()));
            renderer.setStyle({ stroke: '#2e70ff', width: 2 });
            this.obstacles.filter(function (o) { return o.isVisible(viewStart, _this.viewDistance); })
                .map(function (o) { return o.getRenderable(); })
                .forEach(function (r) { return renderer.render(r); });
            renderer.render(new StyleRenderable_7.StyleRenderable({ stroke: '#FF0000', width: 2 }, this.user.getRenderable()));
        };
        Level11.prototype.finished = function () {
            return this.levelEnd;
        };
        return Level11;
    }());
    exports.Level11 = Level11;
});
define("levels/Level12", ["require", "exports", "levels/TextWithPictureLevel"], function (require, exports, TextWithPictureLevel_5) {
    "use strict";
    exports.__esModule = true;
    var Level12 = /** @class */ (function (_super) {
        __extends(Level12, _super);
        function Level12() {
            return _super.call(this, "res/img/Developer.png", "Unfortunately, I didn't have time to fully finnish the game nor the engine. If you are interested, visit github repository PatrikValkovic/OldSchool. Thank you for playing this game.           - Developer", 'right', 36) || this;
        }
        return Level12;
    }(TextWithPictureLevel_5.TextWithPictureLevel));
    exports.Level12 = Level12;
});
define("levels/levels", ["require", "exports", "levels/Level01", "levels/Level02", "levels/Level03", "levels/SkippableLevel", "levels/TimedLevel", "levels/Level04", "levels/Level05", "levels/Level06", "levels/Level07", "levels/Level08", "levels/Level09", "levels/Level10", "levels/Level11", "levels/Level12"], function (require, exports, Level01_1, Level02_1, Level03_1, SkippableLevel_1, TimedLevel_1, Level04_1, Level05_1, Level06_1, Level07_1, Level08_1, Level09_1, Level10_1, Level11_1, Level12_1) {
    "use strict";
    exports.__esModule = true;
    function levels() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //yield new Level12();
                // Press enter to
                return [4 /*yield*/, new Level01_1.Level01()];
                case 1:
                    //yield new Level12();
                    // Press enter to
                    _a.sent();
                    // ITnetwork logo
                    return [4 /*yield*/, new SkippableLevel_1.SkippableLevel(new TimedLevel_1.TimedLevel(function (timeoutInvoke) { return new Level02_1.Level02(timeoutInvoke); }, 6000), '#FFFFFF')];
                case 2:
                    // ITnetwork logo
                    _a.sent();
                    // Warfrog Interactive logo
                    return [4 /*yield*/, new SkippableLevel_1.SkippableLevel(new TimedLevel_1.TimedLevel(function (timeoutInvoke) { return new Level03_1.Level03(timeoutInvoke); }, 6000), '#000000')];
                case 3:
                    // Warfrog Interactive logo
                    _a.sent();
                    // Introduction conversation
                    return [4 /*yield*/, new SkippableLevel_1.SkippableLevel(new TimedLevel_1.TimedLevel(function (timeoutInvoke) { return new Level04_1.Level04(timeoutInvoke); }, 0), '#000000', function (t) {
                            t.innerLevel.skipped();
                        })];
                case 4:
                    // Introduction conversation
                    _a.sent();
                    // Horizontal movement test
                    return [4 /*yield*/, new SkippableLevel_1.SkippableLevel(new Level05_1.Level05(), '#000000')];
                case 5:
                    // Horizontal movement test
                    _a.sent();
                    // How to avoid obstacles
                    return [4 /*yield*/, new SkippableLevel_1.SkippableLevel(new TimedLevel_1.TimedLevel(function (timeoutInvoke) { return new Level06_1.Level06(timeoutInvoke); }, 0), '#000000', function (t) {
                            t.innerLevel.skipped();
                        })];
                case 6:
                    // How to avoid obstacles
                    _a.sent();
                    // avoid mountains
                    return [4 /*yield*/, new Level07_1.Level07()];
                case 7:
                    // avoid mountains
                    _a.sent();
                    // asteroids speech
                    return [4 /*yield*/, new SkippableLevel_1.SkippableLevel(new TimedLevel_1.TimedLevel(function (timeoutInvoke) { return new Level08_1.Level08(timeoutInvoke); }, 0), '#000000', function (t) {
                            t.innerLevel.skipped();
                        })];
                case 8:
                    // asteroids speech
                    _a.sent();
                    // asteroids
                    return [4 /*yield*/, new Level09_1.Level09()];
                case 9:
                    // asteroids
                    _a.sent();
                    // updated radar
                    return [4 /*yield*/, new SkippableLevel_1.SkippableLevel(new TimedLevel_1.TimedLevel(function (timeoutInvoke) { return new Level10_1.Level10(timeoutInvoke); }, 0), '#000000', function (t) {
                            t.innerLevel.skipped();
                        })];
                case 10:
                    // updated radar
                    _a.sent();
                    return [4 /*yield*/, new Level11_1.Level11()];
                case 11:
                    _a.sent();
                    // last level
                    return [4 /*yield*/, new Level12_1.Level12()];
                case 12:
                    // last level
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    exports.levels = levels;
});
define("MyGame", ["require", "exports", "Renderer", "TimeManager", "levels/levels", "EventEngine"], function (require, exports, Renderer_2, TimeManager_1, levels_1, EventEngine_1) {
    "use strict";
    exports.__esModule = true;
    var MyGame = /** @class */ (function () {
        function MyGame(canvas) {
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
            this.render = new Renderer_2.Renderer(this.context);
        }
        MyGame.prototype.start = function () {
            var _this = this;
            var timing = new TimeManager_1.TimeManager();
            var events = new EventEngine_1.EventEngine();
            events.attach(this.canvas);
            var l = levels_1.levels();
            var level = l.next().value;
            var loop = function () {
                try {
                    events.nextFrame();
                    timing.newFrame();
                    //timing.reportCurrent();
                    var delta = timing.delta();
                    events.checkPause();
                    _this.render.newFrame();
                    level.nextFrame();
                    level.update(delta, events);
                    level.collisions();
                    level.render(_this.render);
                    if (level.finished()) {
                        if (typeof level.finished() === 'function')
                            level = level.finished()();
                        else if (typeof level.finished() === 'object')
                            level = level.finished();
                        else if (typeof level.finished() === 'boolean')
                            level = l.next().value;
                        // TODO some level loading
                    }
                }
                catch (e) {
                    if (!(e instanceof EventEngine_1.PauseException))
                        console.error(e);
                }
                finally {
                    window.requestAnimationFrame(loop);
                }
            };
            window.requestAnimationFrame(loop);
        };
        return MyGame;
    }());
    exports.MyGame = MyGame;
});
define("init", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function init(canvasId) {
        var canvas = document.getElementById(canvasId);
        var recompute = function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        recompute();
        window.addEventListener('resize', recompute);
        return canvas;
    }
    exports.init = init;
});
define("main", ["require", "exports", "MyGame", "init"], function (require, exports, MyGame_1, init_1) {
    "use strict";
    exports.__esModule = true;
    function main() {
        var canvas = init_1.init('canvas');
        var game = new MyGame_1.MyGame(canvas);
        game.start();
    }
    exports.main = main;
});
define("levels/SoundLevel", ["require", "exports", "SoundEngine"], function (require, exports, SoundEngine_12) {
    "use strict";
    exports.__esModule = true;
    var SoundLevel = /** @class */ (function () {
        function SoundLevel(media, doneCallback, innerLevel) {
            if (innerLevel === void 0) { innerLevel = null; }
            SoundEngine_12.sound().prepare(media).then(function (buffer) { return (SoundEngine_12.sound().playNow(buffer).buffer.addEventListener("ended", doneCallback)); });
            this.level = innerLevel;
        }
        SoundLevel.prototype.collisions = function () {
            if (this.level)
                this.level.collisions();
        };
        SoundLevel.prototype.finished = function () {
            if (this.level)
                return this.level.finished();
        };
        SoundLevel.prototype.nextFrame = function () {
            if (this.level)
                this.level.nextFrame();
        };
        SoundLevel.prototype.render = function (renderer) {
            if (this.level)
                this.level.render(renderer);
        };
        SoundLevel.prototype.update = function (delta, events) {
            if (this.level)
                this.level.update(delta, events);
        };
        return SoundLevel;
    }());
    exports.SoundLevel = SoundLevel;
});
define("levels/TextLevel", ["require", "exports", "Settings", "Entities", "renderables/TextRenderable", "renderables/StyleRenderable", "renderables/BorderRenderable"], function (require, exports, Settings_7, Entities_27, TextRenderable_4, StyleRenderable_8, BorderRenderable_2) {
    "use strict";
    exports.__esModule = true;
    var TextLevel = /** @class */ (function () {
        function TextLevel(text, fontSize) {
            this.text = text;
            this.fontSize = fontSize;
            this.renderableText = null;
        }
        TextLevel.prototype.nextFrame = function () {
        };
        TextLevel.prototype.update = function (delta, events) {
        };
        TextLevel.prototype.collisions = function () {
        };
        TextLevel.prototype.render = function (renderer) {
            renderer.clear({ fill: '#FFFFFF' });
            var borders = 25;
            renderer.render(new StyleRenderable_8.StyleRenderable({ fill: '#FF0000' }, new BorderRenderable_2.BorderRenderable(borders)));
            var c = renderer.context();
            var availableSpace = {
                w: c.canvas.width,
                h: c.canvas.height,
            };
            // draw text
            if (!this.renderableText) {
                var posx = borders + this.fontSize * 0.3;
                var posy = borders + this.fontSize * 0.3;
                var maxHeight = availableSpace.h - this.fontSize * 0.6 - 2 * borders;
                var maxWidth = availableSpace.w - this.fontSize * 0.6 - 2 * borders;
                this.renderableText = new TextRenderable_4.TextRenderable(this.text, new Entities_27.Coordinate(posx, posy), this.fontSize, 'left', 'start', new Entities_27.Rect(maxWidth, maxHeight));
            }
            renderer.setStyle({
                fill: '#000000',
                textAlign: "left",
                font: this.fontSize + "px \"" + Settings_7.settings().font + "\""
            });
            renderer.render(this.renderableText);
        };
        TextLevel.prototype.finished = function () {
            return false;
        };
        return TextLevel;
    }());
    exports.TextLevel = TextLevel;
});
//# sourceMappingURL=script.js.map