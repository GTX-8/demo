// //模拟axios模块
// jest.mock('axios', () => ({
//   get: jest.fn(() => Promise.resolve({ data: 3 }))
// }))
// import { shallow } from 'vue-test-utils'
// import form from '@/page/form'
// import axios from 'axios' // axios here is the mock from above!
// it('Calls axios.get and checks promise result', async () => {
//   const result = await cmp.vm.onSubmit('an')
//   expect(result).toEqual({ data: [3] })
//   expect(cmp.vm.results).toEqual([3])
//   expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=an')
// })