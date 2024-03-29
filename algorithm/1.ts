let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]
// 输出结果：
// [
//     {
//         "id": 1,
//         "name": "部门1",
//         "pid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "name": "部门2",
//                 "pid": 1,
//                 "children": []
//             },
//             {
//                 "id": 3,
//                 "name": "部门3",
//                 "pid": 1,
//                 "children": [
//                     // 结果 ,,,
//                 ]
//             }
//         ]
//     }
// ]

// 1. 不考虑性能，递归遍历查找
// 思路：提供一个getChildren方法，递归查找子集
// 实现方法：
/**
 * 递归查找，获取children
 */
  const getChildren = (data,result,pid) => {
    for(let item of data) {
      if(item.pid === pid) {
        const newItem = {...item,children:[]};
        result.push(newItem)
        getChildren(data,newItem.children,item.id)
      }
    }
  }

  /**
  * 转换方法
  */
  const arrayToTree = (data, pid) => {
    const result = [];
    getChildren(data, result, pid)
    return result;
  }
  
  // console.log(arrayToTree(arr,0))

  // 2. 转成map存储，之后遍历的同时借助对象的引用，直接从map找对应的数据做存储
  function arrayToTree2(items) {
    const result = [];   // 存放结果集
    const itemMap = {};  // 
      
    // 先转成map存储
    for (const item of items) {
      itemMap[item.id] = {...item, children: []}
    }
    
    for (const item of items) {
      const id = item.id;
      const pid = item.pid;
      const treeItem =  itemMap[id];
      if (pid === 0) {
        result.push(treeItem);
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: [],
          }
        }
        itemMap[pid].children.push(treeItem)
      }
  
    }
    return result;
  }
  // 有两次循环，该实现的时间复杂度为O(2n)，需要一个Map把数据存储起来，空间复杂度O(n)

  // 3. 提高性能
  // 主要思路也是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储。不同点在遍历的时候既做Map存储,又找对应关系。性能会更好。
  function arrayToTree3(items) {
    const result = [];
    const itemMap = {}

    for(const item of items) {
      const id = item.id;
      const pid = item.pid;

      if(!itemMap[id]) {
        itemMap[id] = {
          children: [],
        }
      }

      itemMap[id] = {
        ...item,
        children: itemMap[id]['children']
      }

      const treeItem =  itemMap[id];
      if(pid === 0) {
        result.push(treeItem)
      } else {
        if(!itemMap[pid]) {
          itemMap[pid] = {
            children:[]
          }
        }
        itemMap[pid].children.push(itemMap)
      }
    }
    return result
  }
  // 该实现的时间复杂度为O(n)，需要一个Map把数据存储起来，空间复杂度O(n)

//   作者：杰出D
//   链接：https://juejin.cn/post/6983904373508145189
//   来源：掘金
