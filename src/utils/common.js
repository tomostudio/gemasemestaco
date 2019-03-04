import {
    RP
} from './variables';

// RESPONSIVE CHECKER
export const RespCheck = {
    width: {
        check: (tresh) => {
            if (typeof window !== `undefined`) {
                const W = window.innerWidth;
                if (W <= tresh) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        status: () => {
            if (typeof window !== `undefined`) {
                const W = window.innerWidth;
                if (W <= RP.width.desktop) {
                    if (W <= RP.width.tablet) {
                        if (W <= RP.width.mobile) {
                            if (W <= RP.width.smaller) {
                                return 'SMALLER';
                            } else {
                                return 'MOBILE';
                            }
                        } else {
                            return 'TABLET';
                        }
                    } else {
                        return 'DESKTOP';
                    }
                } else {
                    return 'LARGER';
                }
            }
        },
        smaller: () => (RespCheck.width.check(RP.width.smaller)),
        mobile: () => (RespCheck.width.check(RP.width.mobile)),
        tablet: () => (RespCheck.width.check(RP.width.tablet)),
        desktop: () => (RespCheck.width.check(RP.width.desktop))
    },
    height: {
        check: (tresh) => {
            if (typeof window !== `undefined`) {
                const H = window.innerHeight;
                if (H <= tresh) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        status: () => {
            if (typeof window !== `undefined`) {
                const H = window.innerHeight;
                if (H <= RP.height.short) {
                    return 'SHORT';
                } else {
                    return 'TALL';
                }
            }
        },
        short: () => (RespCheck.height.check(RP.height.short)),
    },

}

// HENDHY HUTOMO UTILITIES OBJECT
export const Quick = {
    qS: (elem) => {
        return document.querySelector(elem);
    },
    qSAll: (elem) => {
        return document.querySelectorAll(elem);
    },
    AddClass: (elem, classname) => {
        if (document.querySelector(elem) != null) {
            const _elem = document.querySelector(elem).classList;
            if (!_elem.contains(classname)) _elem.add(classname);
        }
    },
    RemoveClass: (elem, classname) => {
        document.querySelector(elem).classList.remove(classname);
    },
    AddClassElem: (elem, classname) => {
        if (elem != null && !elem.classList.contains(classname)) elem.classList.add(classname);
    },
    RemoveClassElem: (elem, classname) => {
        elem.classList.remove(classname);
    },
    ScrollIt: (destination, duration = 200, easing = 'linear', callback) => {
        const easings = {
            linear(t) {
                return t;
            },
            easeInQuad(t) {
                return t * t;
            },
            easeOutQuad(t) {
                return t * (2 - t);
            },
            easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            },
            easeInCubic(t) {
                return t * t * t;
            },
            easeOutCubic(t) {
                return (--t) * t * t + 1;
            },
            easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            easeInQuart(t) {
                return t * t * t * t;
            },
            easeOutQuart(t) {
                return 1 - (--t) * t * t * t;
            },
            easeInOutQuart(t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
            },
            easeInQuint(t) {
                return t * t * t * t * t;
            },
            easeOutQuint(t) {
                return 1 + (--t) * t * t * t * t;
            },
            easeInOutQuint(t) {
                return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
            }
        };

        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
            if (typeof window !== `undefined`) window.scroll(0, destinationOffsetToScroll);

            if (callback) {
                callback();
            }
            return;
        }

        const scroll = () => {
            if (typeof window !== `undefined`) {
                const now = 'now' in window.performance ? performance.now() : new Date().getTime();
                const time = Math.min(1, ((now - startTime) / duration));
                const timeFunction = easings[easing](time);
                window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

                if (window.pageYOffset === destinationOffsetToScroll) {
                    if (callback) {
                        callback();
                    }
                    return;
                }

                requestAnimationFrame(scroll);
            }
        }

        scroll();
    },
    FitHeight: (classname = '.fitheight') => {

        const elems = Quick.qSAll(classname);

        if (elems.length > 0) {
            elems.forEach((elem) => {
                if (typeof window !== `undefined`) {
                    elem.style.height = `${window.innerHeight}px`;
                }
            });
        }
    }
};
