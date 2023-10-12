import { Schema, models, model } from "mongoose";

const PromptSchema = new Schema({
  creators: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required ."],
  },
  tag: {
    type: String,
    required: [true, "Prompt is required ."],
  },
});

const Prompt = models.prompt || model("Prompt", PromptSchema);

export default Prompt;
