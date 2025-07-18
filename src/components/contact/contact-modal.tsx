"use client";

import { useState, useEffect } from "react";
import { Calendar, MessageTextSquare01 as MessageCircle, Mail01 as Mail, X } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: React.ReactNode;
}

export const ContactModal = ({ isOpen, onClose, trigger }: ContactModalProps) => {
  // Handle Escape key press to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const contactOptions = [
    {
      title: "Agendar Reunión",
      description: "Programa una videollamada de 30 minutos",
      icon: Calendar,
      action: () => {
        window.open("https://tidycal.com/hjbarraza/30", "_blank");
        onClose();
      },
      color: "bg-blue-500 hover:bg-blue-600",
      recommended: true
    },
    {
      title: "WhatsApp",
      description: "Contacto inmediato por WhatsApp",
      icon: MessageCircle,
      action: () => {
        window.open("https://wa.me/5281836630800?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20automatizaci%C3%B3n%20de%20Automatique.", "_blank");
        onClose();
      },
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Email",
      description: "Envía un correo detallado",
      icon: Mail,
      action: () => {
        window.location.href = "mailto:automatique@astraed.co?subject=Consulta%20sobre%20automatización&body=Hola%2C%20me%20gustaría%20obtener%20más%20información%20sobre%20los%20servicios%20de%20automatización%20de%20Automatique.";
        onClose();
      },
      color: "bg-stone-500 hover:bg-stone-600"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-primary border border-secondary rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-secondary">
          <div>
            <h2 className="text-xl font-semibold text-primary">
              Habla con un Experto
            </h2>
            <p className="text-sm text-tertiary mt-1">
              Elige tu método de contacto preferido
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-tertiary" />
          </button>
        </div>

        {/* Contact Options */}
        <div className="p-6 space-y-4">
          {contactOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className={cx(
                "w-full p-4 rounded-xl text-white text-left transition-all duration-200 transform hover:scale-[1.02] relative overflow-hidden",
                option.color
              )}
            >
              {option.recommended && (
                <div className="absolute top-2 right-2">
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                    Recomendado
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg">
                  <option.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{option.title}</h3>
                  <p className="text-white/80 text-sm">{option.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-secondary bg-secondary/30">
          <p className="text-xs text-tertiary text-center">
            Tiempo de respuesta: WhatsApp &lt; 5 min | Email &lt; 2 horas | Reunión programada
          </p>
        </div>
      </div>
    </div>
  );
};

export const ContactButton = ({ 
  children, 
  className, 
  size = "xl",
  color,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "tertiary" | "link-gray" | "link-color" | "primary-destructive" | "secondary-destructive" | "tertiary-destructive" | "link-destructive";
  [key: string]: any;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        size={size}
        color={color}
        className={cx(!color && "bg-stone-900 text-white hover:bg-stone-800", className)}
        onClick={() => setIsModalOpen(true)}
        {...props}
      >
        {children}
      </Button>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};