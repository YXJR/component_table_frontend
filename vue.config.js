module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
        app.get('/api/tableData', (res, req) => {
          setTimeout(() => {
            req.json([
              {
                id: '12987123',
                name: '小虎',
                amount1: '165',
                amount2: '4.43',
                amount3: 12,
              },
              {
                id: '12987124',
                name: '王小',
                amount1: '324',
                amount2: '1.9',
                amount3: 9,
              },
              {
                id: '12987125',
                name: '王虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9,
              },
              {
                id: '12987126',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9,
              },
              {
                id: '12987127',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9,
              },
              {
                id: '12987131',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9,
              },
            ])
          }, 1000)
        })
      },
    },
  },
}
