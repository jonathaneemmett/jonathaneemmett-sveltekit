<script>
	import EmailSignup from "../components/emailsignup/EmailSignup.svelte";
	import Card from "../components/layout/Card.svelte";
    import Hero from "../components/layout/Hero.svelte";
	import Button from "../components/shared/Button.svelte";

</script>

<Hero>
    <div class="content-center">
        <h1>Jonathan E. Emmett</h1>
        <span>Software Engineer | UX/UI Web Enthusist | Martial Practitioner | Buddhist Wanna Be | Not A Runner</span>
    </div>
</Hero>
<EmailSignup />

<div class="flex flex-wrap gap-4 max-w-[1290px] mx-auto p-4">
    <Card>
        <span slot="title">Noteworthy technology acquisitions 2021</span>
        <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto repellat iure neque at laboriosam cum minus totam temporibus. Itaque voluptatem dolorem sunt. Consequuntur placeat consequatur non? Illum, animi temporibus.</span>
        <span slot="button">
            <Button href="/" text="Read more" />
        </span>
    </Card>
    <Card>
        <span slot="title">Noteworthy technology acquisitions 2021</span>
        <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto repellat iure neque at laboriosam cum minus totam temporibus. Itaque voluptatem dolorem sunt. Consequuntur placeat consequatur non? Illum, animi temporibus.</span>
        <span slot="button">
            <Button href="/" text="Read more" />
        </span>
    </Card>
    <Card>
        <span slot="title">Noteworthy technology acquisitions 2021</span>
        <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto repellat iure neque at laboriosam cum minus totam temporibus. Itaque voluptatem dolorem sunt. Consequuntur placeat consequatur non? Illum, animi temporibus.</span>
        <span slot="button">
            <Button href="/" text="Read more" />
        </span>
    </Card>
</div>
    
<style>

</style>
