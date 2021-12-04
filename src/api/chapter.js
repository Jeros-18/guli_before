
import request from '@/utils/request'

export default {
    //根据课程id查询章节、小节信息
getChapterVideoById(courseId){
    return request({
        url: `/eduService/edu-chapter/getChapterVideoById/${courseId}`,
        method: 'get'
      })
}
}