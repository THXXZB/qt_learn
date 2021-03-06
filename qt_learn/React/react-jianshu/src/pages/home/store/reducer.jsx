import { fromJS } from 'immutable'
import * as CONSTANTS from './constant'

const defaultState = fromJS({
  topicList: []
})
function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case CONSTANTS.CHANGE_HOME_DATA:
      // merge() : 合并数据
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  }
}
export default homeReducer