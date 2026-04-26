import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { useNotificationStore } from '../../store'
import { cn } from '../../utils/cn'

const toastIcons = {
  success: <CheckCircle className="h-5 w-5 text-green-500" />,
  error: <AlertCircle className="h-5 w-5 text-red-500" />,
  info: <Info className="h-5 w-5 text-blue-500" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />
}

const toastVariants = {
  success: 'border-green-500/20 bg-green-500/10',
  error: 'border-red-500/20 bg-red-500/10',
  info: 'border-blue-500/20 bg-blue-500/10',
  warning: 'border-yellow-500/20 bg-yellow-500/10'
}

export function ToastContainer() {
  const { notifications, removeNotification } = useNotificationStore()

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'glass rounded-lg p-4 min-w-[300px] max-w-md border',
              toastVariants[notification.type]
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {toastIcons[notification.type]}
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="flex-shrink-0 text-foreground/50 hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
