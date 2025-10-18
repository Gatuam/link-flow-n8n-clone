import { useQueryStates } from 'nuqs'
import { workflowsParams } from '../lib/params'

export const useWorkflowsParams= ()=> {
    return useQueryStates(workflowsParams)
}
