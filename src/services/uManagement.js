import request from '@/utils/request';
export async function queryUserAll() {
  return request('/production/send',{
           mode:'cors',// 避免cors攻击
    　　　　method: 'GET',
    　　}).then(res => {
            console.log(res); 
    　　　　return res;
    　　}).catch(err => console.log(err));
}
export async function dbButton() {
        return request('/production/dbButton',{
                 mode:'cors',// 避免cors攻击
          　　　　method: 'GET',
          　　}).then(res => {
                  console.log(res); 
          　　　　return res;
          　　}).catch(err => console.log(err));
      }