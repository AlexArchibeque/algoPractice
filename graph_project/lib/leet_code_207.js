// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/
// Topological sort
const buildGraph = (list) => {
    let graph = {};

    list.forEach( prereq => {
        let [course,pre] = prereq.map(ele => ele.toString())
        if(graph[course]){
            graph[course].push(pre)
        }else{
            graph[course] = [pre]
        }

        if(!graph[pre]){
            graph[pre] = []
        }

    })

    return graph;
}

function canFinish(numCourses, prerequisites) {
    let prereq = buildGraph(prerequisites)
    let totalCourses = Object.keys(prereq).length
    let completed = new Set();

    let eligibleCourseExists = true;

    while( eligibleCourseExists ){
        eligibleCourseExists = false;
        for(let course in prereq) {
            let everyPreBeenMet = prereq[course].every( pre => completed.has(pre))
            if(!completed.has(course) && everyPreBeenMet ){
                completed.add(course)
                eligibleCourseExists = true;
            }
        }

    }

    return completed.size === totalCourses;
}


canFinish( 2, [[1,0]])
canFinish( 2, [[1,0], [0,1]])