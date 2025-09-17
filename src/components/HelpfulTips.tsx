import React from 'react';
import { Lightbulb, AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface TipProps {
  type: 'tip' | 'warning' | 'info' | 'success' | 'error';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TipIcon = ({ type }: { type: TipProps['type'] }) => {
  switch (type) {
    case 'tip':
      return <Lightbulb className="h-4 w-4" />;
    case 'warning':
      return <AlertTriangle className="h-4 w-4" />;
    case 'info':
      return <Info className="h-4 w-4" />;
    case 'success':
      return <CheckCircle className="h-4 w-4" />;
    case 'error':
      return <XCircle className="h-4 w-4" />;
    default:
      return <Info className="h-4 w-4" />;
  }
};

const TipStyles = {
  tip: 'border-blue-200 bg-blue-50 text-blue-800',
  warning: 'border-amber-200 bg-amber-50 text-amber-800',
  info: 'border-gray-200 bg-gray-50 text-gray-800',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  error: 'border-red-200 bg-red-50 text-red-800',
};

export const HelpfulTip: React.FC<TipProps> = ({
  type,
  title,
  children,
  className = "",
}) => {
  return (
    <Alert className={`${TipStyles[type]} ${className} my-4`}>
      <TipIcon type={type} />
      <AlertDescription>
        {title && <strong className="block mb-1">{title}</strong>}
        {children}
      </AlertDescription>
    </Alert>
  );
};

// Pre-configured common tips
export const CommonTips = {
  OrganizationSecret: () => (
    <HelpfulTip type="warning" title="Security Warning">
      Keep your Organization Secret secure in your client-side application. 
      For frontend applications, use your App ID which is safe to expose publicly.
    </HelpfulTip>
  ),

  VersionMismatch: () => (
    <HelpfulTip type="error" title="Version Compatibility">
      Make sure you're using the correct SDK version. Web SDK v1.2.32 uses instance-based methods, 
      not static methods. If you see <code>CavosAuth.signUp()</code> in examples, 
      update to <code>new CavosAuth().signUp()</code>.
    </HelpfulTip>
  ),

  TokenRefresh: () => (
    <HelpfulTip type="tip" title="Automatic Token Refresh">
      The SDK automatically handles token refresh during API calls. Access tokens expire every 5 minutes, 
      but you don't need to manually refresh them - just handle the updated tokens returned in responses.
    </HelpfulTip>
  ),

  Prerequisites: ({ requirements }: { requirements: string[] }) => (
    <HelpfulTip type="info" title="Before You Start">
      <ul className="list-disc list-inside space-y-1 mt-2">
        {requirements.map((req, index) => (
          <li key={index} className="text-sm">{req}</li>
        ))}
      </ul>
    </HelpfulTip>
  ),

  QuickValidation: ({ checks }: { checks: { label: string; valid: boolean }[] }) => (
    <HelpfulTip type="info" title="Quick Validation Checklist">
      <div className="space-y-2 mt-2">
        {checks.map((check, index) => (
          <div key={index} className="flex items-center space-x-2">
            {check.valid ? (
              <CheckCircle className="h-4 w-4 text-emerald-600" />
            ) : (
              <XCircle className="h-4 w-4 text-red-600" />
            )}
            <span className="text-sm">{check.label}</span>
          </div>
        ))}
      </div>
    </HelpfulTip>
  ),
};