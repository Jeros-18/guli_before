import request from '@/utils/request'

export default {
    //添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: `/eduservice/educourse/addCourseInfo`,
            method: 'post',
            data: courseInfo
        })
    },

    // 根据Id查询课程信息
    getCourseInfoById(id){
        return request({
            url: `/eduservice/educourse/getCourseInfoById/${id}`,
            method: 'get'
        })
    }


}