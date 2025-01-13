import React from 'react';
import reactLogo from '@/assets/react.svg';
import qnetsLogo from '/qnets.svg';
import { homeStore } from '@/store/home';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ThemeSwitch from '@/components/custom/theme-switch';
import { toast } from '@/hooks/use-toast';

const Home: React.FC = () => {
    const count = homeStore(state => state.count);
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center w-full h-svh gap-6'
            )}
        >
            <div className={cn('flex items-center gap-6')}>
                <div>
                    <img
                        src={qnetsLogo}
                        className={cn('size-24')}
                        alt="Qnets logo"
                    />
                </div>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className={cn('size-24')}
                        alt="React logo"
                    />
                </a>
            </div>
            <h1 className={cn('text-4xl font-bold')}>Qnets + React</h1>
            <Button
                onClick={() => {
                    homeStore.setState({ count: count + 1 });
                    toast({
                        description: 'count is updated!'
                    });
                }}
            >
                count is {count}
            </Button>
            <ThemeSwitch />
            <p>Click on the Button to change the Theme.</p>
        </div>
    );
};

export default Home;
