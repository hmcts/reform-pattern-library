module.exports = {

  bind: function(app) {

    // index
    app.get('/', function (req, res) {
      res.render('index',
        data = {
          pageTitle : 'Reform Pattern Library'
        }
      )
    })

    // elements
    app.get('/elements', function (req, res) {
      res.render('elements/index',
        data = {
          pageTitle : 'Elements'
        }
      )
    })

    // components
    app.get('/components', function (req, res) {
      res.render('components/index',
        data = {
          pageTitle : 'Components'
        }
      )
    })

    // layouts
    app.get('/layouts', function (req, res) {
      res.render('layouts/index',
        data = {
          pageTitle : 'Layouts'
        }
      )
    })

    // layouts
    app.get('/journeys', function (req, res) {
      res.render('journeys/index',
        data = {
          pageTitle : 'Journeys'
        }
      )
    })


    // address lookup
    app.get('/address-lookup', function (req, res) {
      res.render('address-lookup/index',
        data = {
          pageTitle : 'Example: Address lookup'
        }
      )
    })

    // progress bar
    app.get('/progress-bar', function (req, res) {
      res.render('progress-bar/index',
        data = {
          pageTitle : 'Example: Progress bar'
        }
      )
    })

    // collapsibles
    app.get('/collapsibles', function (req, res) {
      res.render('collapsibles/index',
        data = {
          pageTitle : 'Example: Collapsibles'
        }
      )
    })

    // tabs
    app.get('/tabs', function (req, res) {
      res.render('tabs/index',
        data = {
          pageTitle : 'Example: Tabs'
        }
      )
    })

    // alpha / beta phase banners
    app.get('/alpha-beta-banners', function (req, res) {
      res.render('alpha-beta-banners/index',
        data = {
          pageTitle : 'Example: Alpha and beta banners'
        }
      )
    })

    // add form items
    app.get('/add-form-items', function (req, res) {
      res.render('add-form-items/index',
        data = {
          pageTitle : 'Example: Add form items'
        }
      )
    })

  }

}
