'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [195],
  {
    9294: (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      var c = a(7294),
        l = a(9960),
        r = a(2263),
        o = a(7961);
      const s = 'heroBanner_qdFl',
        n = 'button_JGCe';
      function i() {
        const { siteConfig: e } = (0, r.Z)();
        return c.createElement(
          o.Z,
          { title: e.title, description: 'A Pure JavaScript Color Picker for React Native' },
          c.createElement(
            'header',
            { className: s },
            c.createElement(
              'div',
              { className: 'container' },
              c.createElement(
                'h1',
                { className: 'hero__title', style: { color: 'black', textShadow: '0px 0px 5px rgb(250,250,250,1)' } },
                e.title
              ),
              c.createElement(
                'p',
                { className: 'hero__subtitle', style: { color: 'black', textShadow: '0px 0px 5px rgb(250,250,250,1)' } },
                e.tagline
              ),
              c.createElement(l.Z, { className: n, to: '/docs/intro' }, 'Documentation')
            )
          )
        );
      }
    },
  },
]);
