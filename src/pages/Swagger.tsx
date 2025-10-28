import React, { Suspense, lazy, useEffect } from "react";
import "swagger-ui-react/swagger-ui.css";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Lazy load SwaggerUI to avoid SSR issues
const SwaggerUI = lazy(() => import("swagger-ui-react"));

const Swagger = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add custom styles for Swagger UI header
    const style = document.createElement('style');
    style.textContent = `
      .swagger-ui .topbar {
        background-color: #32329f; /* color del header */
      }
      .swagger-ui .topbar a span {
        display: none; /* ocultar texto */
      }
      .swagger-ui .topbar a::before {
        content: "Mi API";
        color: white;
        font-weight: 600;
        font-size: 18px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* Simple Header with Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/api")}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to API Overview</span>
          </Button>
        </div>
      </div>

      {/* Swagger UI - Full Height */}
      <div style={{ height: "calc(100vh - 60px)" }}>
        <Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading API Documentation...</p>
            </div>
          </div>
        }>
          <SwaggerUI
            url="/swagger.yaml"
            layout="BaseLayout"
            docExpansion="none"
            deepLinking={true}
            defaultModelsExpandDepth={-1}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Swagger;