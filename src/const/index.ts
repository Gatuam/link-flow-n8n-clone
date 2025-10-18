import { FolderOpenIcon, HistoryIcon, KeyIcon } from "lucide-react";

export const menuItems = [
    {
        title: 'WorkFlows',
        items: [
            {
                title: 'WorkFlows',
                icon: FolderOpenIcon,
                url: '/workflows'
            },
            {
                title: 'Credentials',
                icon: KeyIcon,
                url: '/credentials'
            },
            {
                title: 'Executions',
                icon: HistoryIcon,
                url: '/executions'
            }
        ]
    }
]



export const PAGINATION = {
    DEFAULT_PAGE : 1,
    DEFAULT_PAGE_SIZE: 5,
    MAX_PAGE_SIZE: 100,
    MIN_PAGE_SIZE: 1,
}