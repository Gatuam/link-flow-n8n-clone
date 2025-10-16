'use client'
import { useSuspenseWorkFLow } from "../hooks/use-workflows";

import React from 'react'

export const WorkFlowsList = () => {
    const workflows = useSuspenseWorkFLow()
  return (
    <div>
        {JSON.stringify(workflows.data, null, 2)}
    </div>
  )
}

