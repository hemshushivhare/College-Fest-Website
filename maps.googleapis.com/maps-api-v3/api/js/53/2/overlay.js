google.maps.__gjsload__('overlay', function(_) {
    var gy = function(a) {
            this.g = a
        },
        Foa = function() {},
        hy = function(a) {
            a.Dq = a.Dq || new Foa;
            return a.Dq
        },
        Goa = function(a) {
            this.Ba = new _.Fi(function() {
                var b = a.Dq;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Zo && a.onAdd) a.onAdd();
                        b.Zo = !0;
                        a.draw()
                    }
                } else {
                    if (b.Zo)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Zo = !1
                }
            }, 0)
        },
        Hoa = function(a, b) {
            function c() {
                return _.Gi(e.Ba)
            }
            var d = hy(a),
                e = d.Nn;
            e || (e = d.Nn = new Goa(a));
            _.lb(d.Oa || [], _.ef);
            var f = d.Wa = d.Wa || new _.Tv,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Dv = d.Dv || new gy(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Oa = [_.M(a, "panes_changed", c), _.M(g, "zoom_changed", c), _.M(g, "offset_changed", c), _.M(b, "projection_changed", c), _.M(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.yf && (_.Q(b, "Ox"), _.P(b, 148440))
        },
        Loa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Ioa(a) !== b && b && b instanceof _.yf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Joa(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.ia;
                        var e = new iy(b, d);
                        d.sb(e);
                        c.overlayLayer = e;
                        Koa(a);
                        Loa(a)
                    })
                }
            }
        },
        Koa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Fd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Ioa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Joa = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.j = c;
            this.h = !1;
            _.Q(this.map, "Ox");
            _.P(this.map, 148440);
            c.nd(this)
        },
        Moa = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        iy = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.h = []
        };
    _.Sa(gy, _.O);
    gy.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Vd(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var jy = {};
    _.Sa(Goa, _.O);
    jy.nd = function(a) {
        if (a) {
            var b = a.getMap();
            (hy(a).lv || null) !== b && (b && Hoa(a, b), hy(a).lv = b)
        }
    };
    jy.Fd = function(a) {
        var b = hy(a),
            c = b.Wa;
        c && c.unbindAll();
        (c = b.Dv) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Oa && _.lb(b.Oa, _.ef);
        b.Oa = null;
        b.Nn && (b.Nn.Ba.xc(), b.Nn = null);
        delete hy(a).lv
    };
    var ky = {};
    Joa.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    iy.prototype.dispose = function() {};
    iy.prototype.Kb = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.ar(this.o, this.j, function() {});
        k.Kb(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Moa(b, k), b.draw()
    };
    iy.prototype.nd = function(a) {
        this.h.push(a);
        this.g && Moa(a, this.g);
        this.j.refresh()
    };
    iy.prototype.Fd = function(a) {
        _.ob(this.h, a)
    };
    ky.nd = Loa;
    ky.Fd = Koa;
    _.Te("overlay", {
        ys: function(a) {
            if (a) {
                (0, jy.Fd)(a);
                (0, ky.Fd)(a);
                var b = a.getMap();
                b && (b instanceof _.yf ? (0, ky.nd)(a) : (0, jy.nd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Cr(a, {
                zd: function(b) {
                    _.un(b.event.Ea)
                },
                yc: function(b) {
                    return _.hr(b)
                },
                Kh: function(b) {
                    return _.ir(b)
                },
                fd: function(b) {
                    return _.ir(b)
                },
                Dc: function(b) {
                    return _.jr(b)
                }
            }).Yi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.af);
            a.addEventListener("contextmenu", _.af);
            a.addEventListener("dblclick", _.af);
            a.addEventListener("mousedown",
                _.af);
            a.addEventListener("mousemove", _.af);
            a.addEventListener("MSPointerDown", _.af);
            a.addEventListener("pointerdown", _.af);
            a.addEventListener("touchstart", _.af);
            a.addEventListener("wheel", _.af)
        }
    });
});