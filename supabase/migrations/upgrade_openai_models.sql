-- WORKSPACES

UPDATE workspaces
SET default_model = 'VinaLlama-7B-Chat-Finetuned'
WHERE default_model = 'VinaLlama-7B-Chat-Finetuned';

UPDATE workspaces
SET default_model = 'VinaLlama-7B-Chat-Finetuned'
WHERE default_model = 'VinaLlama-7B-Chat-Finetuned';

-- PRESETS

UPDATE presets
SET model = 'VinaLlama-7B-Chat-Finetuned'
WHERE model = 'VinaLlama-7B-Chat-Finetuned';

UPDATE presets
SET model = 'VinaLlama-7B-Chat-Finetuned'
WHERE model = 'VinaLlama-7B-Chat-Finetuned';

-- ASSISTANTS

UPDATE assistants
SET model = 'VinaLlama-7B-Chat-Finetuned'
WHERE model = 'VinaLlama-7B-Chat-Finetuned';

UPDATE assistants
SET model = 'VinaLlama-7B-Chat-Finetuned'
WHERE model = 'VinaLlama-7B-Chat-Finetuned';

-- CHATS

UPDATE chats
SET model = 'VinaLlama-7B-Chat-Finetuned'
WHERE model = 'VinaLlama-7B-Chat-Finetuned';

UPDATE chats
SET model = 'VinaLlama-7B-Chat-Finetuned'
WHERE model = 'VinaLlama-7B-Chat-Finetuned';

-- MESSAGES

UPDATE messages
SET model = 'VinaLlama-7B-Chat-Finetuned'
WHERE model = 'VinaLlama-7B-Chat-Finetuned';

UPDATE messages
SET model = 'VinaLlama-7B-Chat-Finetuned'
WHERE model = 'VinaLlama-7B-Chat-Finetuned';

-- PROFILES

CREATE OR REPLACE FUNCTION create_profile_and_workspace() 
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    random_username TEXT;
BEGIN
    -- Generate a random username
    random_username := 'user' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 16);

    -- Create a profile for the new user
    INSERT INTO public.profiles(user_id, google_gemini_api_key, has_onboarded, image_url, image_path, display_name, bio, profile_context, username)
    VALUES(
        NEW.id,
        '',
        FALSE,
        '',
        '',
        '',
        '',
        '',
        random_username
    );

    INSERT INTO public.workspaces(user_id, is_home, name, default_context_length, default_model, default_prompt, default_temperature, description, embeddings_provider, include_profile_context, include_workspace_instructions, instructions)
    VALUES(
        NEW.id,
        TRUE,
        'Home',
        4096,
        'VinaLlama-7B-Chat-Finetuned', -- Updated default model
        'Bạn là nhà tư vấn hãy tìm hiểu về khách hàng của mình và giúp họ giải quyết vấn đề của họ.',
        0.5,
        'My home workspace.',
        'custom',
        TRUE,
        TRUE,
        ''
    );

    RETURN NEW;
END;
$$;
