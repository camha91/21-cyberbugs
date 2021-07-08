const initialState = {
    taskDetailModel: {
        priorityTask: {
            priorityId: 2,
            priority: "Medium",
        },
        taskTypeDetail: {
            id: 2,
            taskType: "new task",
        },
        assigness: [
            {
                id: 169,
                avatar: "https://ui-avatars.com/api/?name=Crystal",
                name: "Crystal",
                alias: "crystal",
            },
        ],
        lstComment: [],
        taskId: 620,
        taskName: "Edit task",
        alias: "edit-task",
        description:
            '<p><strong><span style="background-color: #2dc26b;">Edit jira clone</span></strong></p>',
        statusId: "3",
        originalEstimate: 3,
        timeTrackingSpent: 3,
        timeTrackingRemaining: 5,
        typeId: 2,
        priorityId: 2,
        projectId: 677,
    },
};

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default TaskReducer;
