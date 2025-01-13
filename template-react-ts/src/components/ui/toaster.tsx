import { useToast } from '@/hooks/use-toast';
import {
    Toast,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport
} from '@/components/ui/toast';
import { cn } from '@/lib/utils';

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                action,
                ...props
            }) {
                return (
                    <Toast key={id} className={cn('pr-4')} {...props}>
                        <div className={cn('grid gap-1')}>
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && (
                                <ToastDescription>
                                    {description}
                                </ToastDescription>
                            )}
                        </div>
                        {action}
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}