import { Info } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { FieldError } from "react-hook-form"

import { Input } from "@/components/ui/input"

interface FormFieldProps {
  label: string
  description: string
  type?: string
  step?: string
  placeholder: string
  registration: ReturnType<any>
  error?: FieldError
}

export default function FormField({
  label,
  description,
  type = "text",
  step,
  placeholder,
  registration,
  error,
}: FormFieldProps) {
  return (
    <div className="space-y-2">

      <div
  className="
    flex
    items-center
    gap-2
  "
>

  <label
    className="
      text-sm
      font-medium
    "
  >
    {label}
  </label>

  <TooltipProvider>

    <Tooltip>

      <TooltipTrigger asChild>

        <Info
          className="
            h-4
            w-4
            cursor-help
            text-muted-foreground
          "
        />

      </TooltipTrigger>

      <TooltipContent
        className="
          max-w-xs
        "
      >
        <p>{description}</p>
      </TooltipContent>

    </Tooltip>

  </TooltipProvider>

</div>

      <Input
        type={type}
        step={step}
        placeholder={placeholder}
        {...registration}
      />

      {error && (
        <p
          className="
            text-sm
            text-red-500
          "
        >
          {error.message}
        </p>
      )}

    </div>
  )
}