'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [491],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => u, kt: () => h });
      var i = n(7294);
      function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var p = i.createContext({}),
        c = function (e) {
          var t = i.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        u = function (e) {
          var t = c(e.components);
          return i.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        m = i.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            r = e.originalType,
            p = e.parentName,
            u = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = c(n),
            m = o,
            h = s[''.concat(p, '.').concat(m)] || s[m] || d[m] || r;
          return n ? i.createElement(h, l(l({ ref: t }, u), {}, { components: n })) : i.createElement(h, l({ ref: t }, u));
        });
      function h(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ('string' == typeof e || o) {
          var r = n.length,
            l = new Array(r);
          l[0] = m;
          var a = {};
          for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
          (a.originalType = e), (a[s] = 'string' == typeof e ? e : o), (l[1] = a);
          for (var c = 2; c < r; c++) l[c] = n[c];
          return i.createElement.apply(null, l);
        }
        return i.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    6467: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => s,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => c,
        });
      var i = n(7462),
        o = (n(7294), n(3905));
      const r = {
          sidebar_position: 17,
          sidebar_label: 'InputWidget',
          description: 'The input widget component allows you to input color values in various formats.',
        },
        l = '<InputWidget />',
        a = {
          unversionedId: 'API/InputWidget',
          id: 'API/InputWidget',
          title: '<InputWidget />',
          description: 'The input widget component allows you to input color values in various formats.',
          source: '@site/docs/API/InputWidget.md',
          sourceDirName: 'API',
          slug: '/API/InputWidget',
          permalink: '/reanimated-color-picker/docs/API/InputWidget',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 17,
          frontMatter: {
            sidebar_position: 17,
            sidebar_label: 'InputWidget',
            description: 'The input widget component allows you to input color values in various formats.',
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'PreviewText', permalink: '/reanimated-color-picker/docs/API/PreviewText' },
          next: { title: 'Swatches', permalink: '/reanimated-color-picker/docs/API/Swatches' },
        },
        p = {},
        c = [
          { value: 'Props', id: 'props', level: 2 },
          { value: '<code>defaultFormat</code>', id: 'defaultformat', level: 3 },
          { value: '<code>formats</code>', id: 'formats', level: 3 },
          { value: '<code>inputStyle</code>', id: 'inputstyle', level: 3 },
          { value: '<code>inputProps</code>', id: 'inputprops', level: 3 },
          { value: '<code>inputTitleStyle</code>', id: 'inputtitlestyle', level: 3 },
          { value: '<code>containerStyle</code>', id: 'containerstyle', level: 3 },
          { value: '<code>iconColor</code>', id: 'iconcolor', level: 3 },
          { value: '<code>iconStyle</code>', id: 'iconstyle', level: 3 },
        ],
        u = { toc: c };
      function s(e) {
        let { components: t, ...r } = e;
        return (0, o.kt)(
          'wrapper',
          (0, i.Z)({}, u, r, { components: t, mdxType: 'MDXLayout' }),
          (0, o.kt)('h1', { id: 'inputwidget-' }, (0, o.kt)('inlineCode', { parentName: 'h1' }, '<InputWidget />')),
          (0, o.kt)('p', null, (0, o.kt)('img', { alt: 'InputWidget', src: n(1118).Z, width: '300', height: '455' })),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The input widget component allows you to input color values in various formats, including RGB, HEX, HSL, HWB, and HSV. The component features a button that lets you cycle through these formats, making it easy to switch between them and find the one that suits your needs.'
            )
          ),
          (0, o.kt)('h2', { id: 'props' }, 'Props'),
          (0, o.kt)('h3', { id: 'defaultformat' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'defaultFormat')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'defaultFormat'),
              ' prop determines the initial color format for the input widget component.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'It accepts one of the following values: ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, "'HEX' | 'RGB' | 'HSL' | 'HWB' | 'HSV'")
            )
          ),
          (0, o.kt)('h3', { id: 'formats' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'formats')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'formats'),
              ' prop determines which color formats are included in the input widget component and the order they appear when cycling through them.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'It accepts an array of the following values: ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, "'HEX' | 'RGB' | 'HSL' | 'HWB' | 'HSV'")
            )
          ),
          (0, o.kt)('h3', { id: 'inputstyle' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'inputStyle')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'inputStyle'),
              ' prop sets the style for the ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'InputText'),
              ' components that make up the input fields for each color format.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'It accepts a ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'StyleProp<TextStyle>'),
              ' object.'
            )
          ),
          (0, o.kt)('h3', { id: 'inputprops' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'inputProps')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'inputProps'),
              ' prop sets the props for the ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'TextInput'),
              ' components that make up the input fields for each color format.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'It accepts an ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'InputProps'),
              ' object.'
            )
          ),
          (0, o.kt)('h3', { id: 'inputtitlestyle' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'inputTitleStyle')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'inputTitleStyle'),
              ' prop sets the style for the ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'Text'),
              ' component that displays the title for the input fields.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'This title is located below the input fields and indicates which color format is currently displayed.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'It accepts a ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'StyleProp<TextStyle>'),
              ' object.'
            )
          ),
          (0, o.kt)('h3', { id: 'containerstyle' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'containerStyle')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'containerStyle'),
              ' prop sets the style for the ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'View'),
              ' component that wraps around all the input fields and the cycle button.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'It accepts a ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'StyleProp<ViewStyle>'),
              ' object.'
            )
          ),
          (0, o.kt)('h3', { id: 'iconcolor' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'iconColor')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'iconColor'),
              ' prop sets the color for the cycle button icon, which is an Image component that cycles through the available color formats when clicked.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'It accepts a ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'string'),
              ' representing a color value.'
            )
          ),
          (0, o.kt)('h3', { id: 'iconstyle' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'iconStyle')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'The ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'iconStyle'),
              ' prop sets the style for the cycle button icon.'
            ),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'It accepts a ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'StyleProp<ImageStyle>'),
              ' object.'
            )
          )
        );
      }
      s.isMDXComponent = !0;
    },
    1118: (e, t, n) => {
      n.d(t, { Z: () => i });
      const i = n.p + 'assets/images/InputWidgets-01952ad7ad083d25cd90fcba19bfc4ad.png';
    },
  },
]);
