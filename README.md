 # 完成头部的导航

1. 组件Header,Footer

2. 路由组件Discover,Fridend,Mine
Discover 的子路由：
recommend,
Rankings....

3. 构建路由表router
   在App.jsx中使用useRoutes();并且展示；

   关于Discover中的子路由 使用Outlet组件展示；

4. 关于样式 直接使用css文件发现有 作用域冲突，需要将css根据组件隔离。使用**styled-components 库；**

# 推荐页
## 封装头部的标题 Header-recommend
- 标题组件中不同的有 标题名，和后面是否有小的分类列表；
所以具体的数据由父组件传入，但是标题名必须由，因此导入prop-types 对数据类型和默认值进行限制；
```js
import propTypes from 'prop-types'
ThemeHeader.propTypes = {
    // 必填标题
    title: propTypes.string.isRequired,
    // 推荐的关键值分类数组
    keyword: propTypes.array,

}
ThemeHeader.defaultProps = {
    //默认空数组
    keyword: []
}
```

## 热门推荐获取数据
**reducer中 初始时执行的时候从action读取的数据时undefined,做了数据操作需要注意**
1. redux-devtools 使用 浏览器插件 ，要redux 插件起作用，需要如下操作。
   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)));

2. 获取数据前 在src/api/recommend 中写好相应的请求函数 
```js
//request.js--------简单封装一个axios,
export const request = axios.create({
    baseURL:BASE_URL,// 本地服务器的地址；location:4000
    timeout:TIME_OUT,
    headers:{}
})
// recommend.js------写recommend页面的相关接口；

// 请求轮播图数据
export const getBannerData = ()=>request({url:"/banner",method:'get',});

//请求热门推荐songcover
// 默认请求8条数据
export const getSongcoverData = (num=8)=>request({url:`/personalized?limit=${num}`,method:'get'});
// 。。。。。
// .....
//。。。。。。

```
3. 创建action ,action中发起网络请求获取数据，传递到reducer中；
关于异步的action
需要使用返回 函数的形式 参数自动接受一个dispatch,用于触发同步的action
```js
export const getBannerDataAction = () => {
    return (dispatch) => {
        getBannerData().then(res => {
            dispatch(bannerAction(res.data))
        })
    }
}
```
4. reducer 中switch 来区分不同的action从而对state 做不同的处理；
5. 封装Song-cover组件
   组件中许多图标展示 和传入的数据有关所以可以通过 判断传入的数据是否存在，来设置样式属性，从而控制图标的显示；
   ```js

   // 控制显示是否为电台节目图标，和是否显示下方的歌单描述
     <div className="dec">
                    {/* 音乐类型标签 */}
                    <p > <a href="#!" className={copywriter ? 'dec-text text-nowrap' : 'dec-text '} title={name}><i className='m-f sprite_icon2' style={{ display: 'none' }}></i>{name}</a></p>
                    {/* copywriter 为空就不显示了 */}
                    <p className={copywriter ? 'r-dec' : 'none'}>
                        <span>by</span>
                        <a href="#!" className='dec-write' title={copywriter}>{copywriter}</a>
                        <img className='r-img' src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png" alt="" />
                    </p>
    </div>
   ```
6. 


## 新碟上架
1. 轮播图设计
- 每一次展示五个项目，在外层先渲染两个子项目，然后每个项目展示五条数据；
- dots={false} 隐藏下部导航按钮
- 上下一页按钮 通过ant Carousel 组件上的prev(),next()方法控制；
```js
  <Carousel ref={discCarousel} dots={false} className='disc-c'>
            {
              ["page1", "page2"].map((pageno,index) => {
                return (
                  <div key={pageno} className="pagebox">
                    <div className='c-page'>
                      {
                        // 第一页1-5条数据，第二页5-10
                        alblumdata.slice(index*5,(index+1)*5).map((item) => {
                          return (
                            <div key={item.id} className="item sprite_02">
                              <DiscItem discInfo = {item} />
                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
                )
              })
            }

          </Carousel>
```

2. 封装 轮播中的 碟片盒子组件 DiscItem；

- 由于其他导航页面同时也会使用该组件，但是它的图片大小，和下方的碟片阴影的背景位置不同，在不同地方使用需要调整其样式，
因此封装组件时需要将使用 该组件的大小，背景图的位置 传入；

## 榜单区域
1. 封装排行表格组件，榜单的表格样式是一张表格样式的背景图，先在外层盒子设置背景图；
2. 封装 请求数据的api ,每个榜单的数据都可以通过对应的id 获取 如：飙升榜19723756 新歌榜3779629 原创榜2884035 
3.  在action中通过不同的id 获取不同的数据 最后整合成一个长度为3 的数组保存到store;
 ```js
//分别获取三个榜单数据action
export const rankingAction = (data) => { return { type: GETRANKTHREE, rankThreeData: data } }
export const getRabkingAction = ({ id1, id2, id3 }) => {
    return async (dispatch) => {
        let result1 = await getRankingData(id1);
        let result2 = await getRankingData(id2);
        let result3 = await getRankingData(id3);
        //  console.log(result1.data.playlist,result2.data.playlist,result3.data.playlist);
        dispatch(rankingAction([result1.data.playlist, result2.data.playlist, result3.data.playlist]))
    }
}
```
  - 使用async/await 等待三个请求的数据都返回后 dispatch;

4. 在排行表格组件中将数据取出 并进行渲染

## 侧边栏的两个列表；

* 入驻歌手的接口无，使用歌手榜的接口请求数据；
1. 由于歌手下方的描述来自 歌手的认证描述；所以除了歌手榜的还需要通过歌手的id 获取歌手的描述信息，再从描述中找出认证描述，和歌手其他信息合并。
2. 所以在接口的请求方面，是串行的两个,第二步中包含多个并行的请求，axios发起的请求返回promise可以再第一个请求成功后使用then()方法，在其中利用上一个请求返回的数据，将其中歌手的id找出，并且创建一个发起之后请求的数组，然后使用promise.all 将数组中的请求全部执行，返回一个promise,该promise只有当pormise.all中的请求全为成功时返回成功。
  - 之前想通过forEach 直接将每一次的数据push保存到一个数组（arrImageDesc）中然后,再合并到请求的歌手榜的数据中，但是发现forEach不会等promise结果；
  - 所以合并的同步代码执行时，arrImageDesc还是个空的。//合了个寂寞//
```js
  getHotSingerData().then(res => {
            // console.log(res.data.artists);
            let arrArtist = res.data.artists;
            let primiseARrr = [];
            // 根据id请求歌手的认证描述
            arrArtist.forEach((item, index) => {
                primiseARrr[index] = getSingerDecData(item.id);
            });
            let p = Promise.all(primiseARrr);
            p.then(res => {
                // console.log('$', res);
                //新的歌手数据
                let newdata = arrArtist.map((item, index) => {
                    // 为每个 歌手的信息对象添加新属性imageDesc
                    item.imageDesc = res[index].data.data.identify.imageDesc;
                    return item;
                })
                // console.log("#", newdata);

                //保存到store
                dispatch(hotSingerAction(newdata))

            })
        })

```
## 热门主播
1. 热门主播接口无，使用热门电台主播接口
2. 请求方式和 上面热门歌手一样， 不过dj主播 的id 不能通过 歌手详情描述接口查询；。。。无语了直接。。。。
   
-----到这第一个推荐页还有个登录 组件未完成------

# 播放器组件
1. 样式使用fixed 固定在底部，flex布局分割结构
2. 添加背景图，右边覆盖滚动条 （做不了-_-!） 官网好像是页面覆盖页面；
3. 歌曲进度条和音量条使用ant 的Slider组件。
4. 修改进度条的原有样式
```css
.ant-slider {
 /*槽的宽度的  */
  .ant-slider-rail,
  .ant-slider-track,
  .ant-slider-step {
        height: 9px;
  }
              
  .ant-slider-rail {}
  /* 轨迹 */
  .ant-slider-track {}
      /* 按钮           */
  .ant-slider-handle {
    /* 去除原本按钮 */
      &::before{
      content:none;
      }

      &::after{
      content:none;
      }
  }
}
```
## 重新写过之前的reducer,
- 播放器的数据要和之前的数据整合到一起，之前recommend页面的全部的reducer,每一个都是分开写的，而每个reducer的switch只有一个选项有一点呆😳；
---------------------------------------------------------------------------------------------
解决一个数据读取的问题，初始化selector读取初始化读取时的空对象无法读取属性，所以读取里面的属性会报无法在undefined上读取xxx.
所以 读取属性前确保该属性已经存在。
**let bgImgUrl =banners &&  banners[currentIndex] && banners[currentIndex].imageUrl + "?imageView&blur=40x20";**

----------------------------------------------------------------------------------------------
