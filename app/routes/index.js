module.exports = {

  bind: function(app) {

    app.get('/', function (req, res) {
      res.render('index',
        data = {
          pageTitle : 'Reform Pattern Library'
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

  }

}
