import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  title: string;
  completed?: boolean;
  current?: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  className = "",
}) => {
  return (
    <div className={`bg-muted/30 rounded-lg p-4 mb-6 ${className}`}>
      <h3 className="text-sm font-medium text-foreground mb-4">Progress</h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                step.completed
                  ? 'bg-emerald-500 text-white'
                  : step.current
                  ? 'bg-brand-primary text-white'
                  : 'bg-muted text-muted-foreground border border-border'
              }`}
            >
              {step.completed ? (
                <Check className="h-3 w-3" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`text-sm transition-colors ${
                step.completed
                  ? 'text-emerald-700 line-through'
                  : step.current
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};