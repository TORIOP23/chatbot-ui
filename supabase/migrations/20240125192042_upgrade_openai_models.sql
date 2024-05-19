-- WORKSPACES

UPDATE workspaces
SET default_model = 'vinaLlama-7B-chat-finetuned'
WHERE default_model = 'vinaLlama-7B-chat-finetuned';

UPDATE workspaces
SET default_model = 'vinaLlama-7B-chat-finetuned'
WHERE default_model = 'vinaLlama-7B-chat-finetuned';

-- PRESETS

UPDATE presets
SET model = 'vinaLlama-7B-chat-finetuned'
WHERE model = 'vinaLlama-7B-chat-finetuned';

UPDATE presets
SET model = 'vinaLlama-7B-chat-finetuned'
WHERE model = 'vinaLlama-7B-chat-finetuned';

-- ASSISTANTS

UPDATE assistants
SET model = 'vinaLlama-7B-chat-finetuned'
WHERE model = 'vinaLlama-7B-chat-finetuned';

UPDATE assistants
SET model = 'vinaLlama-7B-chat-finetuned'
WHERE model = 'vinaLlama-7B-chat-finetuned';

-- CHATS

UPDATE chats
SET model = 'vinaLlama-7B-chat-finetuned'
WHERE model = 'vinaLlama-7B-chat-finetuned';

UPDATE chats
SET model = 'vinaLlama-7B-chat-finetuned'
WHERE model = 'vinaLlama-7B-chat-finetuned';

-- MESSAGES

UPDATE messages
SET model = 'vinaLlama-7B-chat-finetuned'
WHERE model = 'vinaLlama-7B-chat-finetuned';

UPDATE messages
SET model = 'vinaLlama-7B-chat-finetuned'
WHERE model = 'vinaLlama-7B-chat-finetuned';

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
    INSERT INTO public.profiles(user_id, has_onboarded, image_url, image_path, display_name, bio, profile_context, username)
    VALUES(
        NEW.id,
        FALSE,
        '',
        '',
        '',
        '',
        '',
        random_username
    );

    INSERT INTO public.workspaces(user_id, is_home, name, default_context_length, default_model, default_prompt, default_temperature, description, include_profile_context, include_workspace_instructions, instructions)
    VALUES(
        NEW.id,
        TRUE,
        'Home',
        4096,
        'vinaLlama-7B-chat-finetuned', -- Updated default model
        'Bạn là nhà tư vấn hãy tìm hiểu về khách hàng của mình và giúp họ giải quyết vấn đề của họ.',
        0.5,
        'My home workspace.',
        TRUE,
        TRUE,
        ''
    );

    RETURN NEW;
END;
$$;
