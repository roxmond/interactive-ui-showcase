"use client";
import { useState } from "react";

type FormState = { name: string; email: string; age: number | "" };

export default function FormDemo() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<false | true | "trueFalse">(false);
  const [forceError, setForceError] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid Email";
    if (form.age === "" || form.age <= 0) e.age = "Age must be greater than 0";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div className="card bg-base-100 p-4 max-w-xl">
      <h3 className="text-lg font-bold mb-2">Demo Form</h3>
      <div className="space-y-3">
        <input
          className="input input-bordered w-full"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        {errors.name && <p className="text-error text-sm">{errors.name}</p>}

        <input
          className="input input-bordered w-full"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        {errors.email && <p className="text-error text-sm">{errors.email}</p>}

        <input
          className="input input-bordered w-full"
          placeholder="Age"
          type="number"
          value={form.age}
          onChange={(e) =>
            setForm((f) => ({
              ...f,
              age: e.target.value === "" ? "" : Number(e.target.value),
            }))
          }
        />
        {errors.age && <p className="text-error text-sm">{errors.age}</p>}

        {/* Error Switch */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Force error on submit</span>
            <input
              type="checkbox"
              className="toggle toggle-error"
              checked={forceError}
              onChange={() => setForceError((v) => !v)}
            />
          </label>
        </div>

        <div className="flex gap-2">
          <button
            className="btn"
            onClick={() => {
              if (validate()) {
                if (forceError) {
                  setSubmitted("trueFalse");
                } else {
                  setSubmitted(true);
                }
              }
            }}
          >
            Submit
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              setForm({ name: "", email: "", age: "" });
              setErrors({});
              setSubmitted(false);
            }}
          >
            Clear
          </button>
        </div>

        {submitted === true && (
          <div className="alert alert-success">
            Submitted:{" "}
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(form, null, 2)}
            </pre>
          </div>
        )}

        {submitted === "trueFalse" && (
          <div className="alert alert-error">
            There is an error on submission. Please turn off the error switch to
            successfully submit the form.
          </div>
        )}
      </div>
    </div>
  );
}
