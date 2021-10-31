import './scss/index.scss'

(()=>{
  console.log('Index.js faaing too))')
  // console.log(process.env.NODE_ENV)
})()

async function func() {
  return await Promise.resolve('params working')
}

func().then(console.log)
