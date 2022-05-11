import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-6">
            <assignmentList :assignments="filters.inProgress" title="In Progress"></assignmentList>
            <assignmentList :assignments="filters.completed" title="Completed"></assignmentList>
        </section>
    `,

    data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read chapter 4', complete: false, id: 2},
                {name: 'Turn in homework', complete: false, id: 3},
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    }
}