const production = [
  {key:1,name:"张三",age:"女",address:"北京，上海"},
  {key:2,name:"张a",age:"男",address:"北京，上海"},
  {key:3,name:"张v三",age:"女",address:"北京，上海"},
  {key:4,name:"张g三",age:"男",address:"北京，上海"},
  {key:5,name:"张g三",age:"n",address:"北京，上海"},
  {key:6,name:"张三g",age:"女",address:"北京，上海"},
  {key:7,name:"张e三",age:"女",address:"北京，上海"}
]

export default {
  'GET /production/send': production,

  'GET /production/dbButton': [{key:1,name:"张三",age:"女",address:"北京，上海"}],
}

